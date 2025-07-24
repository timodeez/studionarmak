'use client';

import { useState, useEffect } from 'react';

interface VideoDebugInfo {
  userAgent: string;
  isIOS: boolean;
  isSafari: boolean;
  isChrome: boolean;
  batteryLevel?: number;
  isCharging?: boolean;
  connectionType?: string;
  deviceMemory?: number;
  hardwareConcurrency?: number;
  lowPowerMode?: boolean;
  autoplayPolicy?: string;
}

export default function VideoDebugger({ visible = false }: { visible?: boolean }) {
  const [debugInfo, setDebugInfo] = useState<VideoDebugInfo | null>(null);
  const [showDebug, setShowDebug] = useState(visible);

  useEffect(() => {
    const gatherDebugInfo = async () => {
      const info: VideoDebugInfo = {
        userAgent: navigator.userAgent,
        isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent),
        isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        isChrome: /Chrome/.test(navigator.userAgent),
        connectionType: (navigator as any).connection?.effectiveType || 'unknown',
        deviceMemory: (navigator as any).deviceMemory,
        hardwareConcurrency: navigator.hardwareConcurrency,
      };

      // Check battery status if available
      if ('getBattery' in navigator) {
        try {
          const battery = await (navigator as any).getBattery();
          info.batteryLevel = Math.round(battery.level * 100);
          info.isCharging = battery.charging;
          info.lowPowerMode = !battery.charging && battery.level < 0.2;
        } catch (e) {
          console.log('Battery API not available');
        }
      }

      // Check autoplay policy if available
      if ('getAutoplayPolicy' in document) {
        try {
          info.autoplayPolicy = (document as any).getAutoplayPolicy('mediaelement');
        } catch (e) {
          console.log('Autoplay policy API not available');
        }
      }

      setDebugInfo(info);
    };

    gatherDebugInfo();
  }, []);

  if (!showDebug || !debugInfo) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[99999] bg-black/90 text-white p-4 rounded-lg max-w-sm text-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold">Video Debug Info</h3>
        <button 
          onClick={() => setShowDebug(false)}
          className="text-white hover:text-red-400"
        >
          ✕
        </button>
      </div>
      <div className="space-y-1">
        <div>iOS: {debugInfo.isIOS ? '✅' : '❌'}</div>
        <div>Safari: {debugInfo.isSafari ? '✅' : '❌'}</div>
        <div>Chrome: {debugInfo.isChrome ? '✅' : '❌'}</div>
        {debugInfo.batteryLevel && (
          <div>Battery: {debugInfo.batteryLevel}% {debugInfo.isCharging ? '🔌' : '🔋'}</div>
        )}
        {debugInfo.lowPowerMode && (
          <div className="text-red-400">⚠️ Low Power Mode Detected</div>
        )}
        <div>Connection: {debugInfo.connectionType}</div>
        {debugInfo.deviceMemory && (
          <div>Memory: {debugInfo.deviceMemory}GB</div>
        )}
        <div>CPU Cores: {debugInfo.hardwareConcurrency}</div>
        {debugInfo.autoplayPolicy && (
          <div>Autoplay: {debugInfo.autoplayPolicy}</div>
        )}
        <div className="text-xs text-gray-400 mt-2 break-all">
          UA: {debugInfo.userAgent.slice(0, 50)}...
        </div>
      </div>
    </div>
  );
}

// Debug trigger component - only shows in development
export function VideoDebugTrigger() {
  const [showDebugger, setShowDebugger] = useState(false);
  
  // Only show in development or when explicitly enabled
  const isDev = process.env.NODE_ENV === 'development';
  const isDebugEnabled = typeof window !== 'undefined' && window.location.search.includes('debug=video');
  
  if (!isDev && !isDebugEnabled) return null;

  return (
    <>
      <button
        onClick={() => setShowDebugger(!showDebugger)}
        className="fixed bottom-4 left-4 z-[99998] bg-blue-600 text-white px-3 py-2 rounded text-xs hover:bg-blue-700"
      >
        📊 Video Debug
      </button>
      <VideoDebugger visible={showDebugger} />
    </>
  );
}