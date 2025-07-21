import LockedOverlay from '@/components/LockedOverlay';

export default function StudioPage() {
  return (
    <>
      <LockedOverlay 
        title="Studio Page Coming Soon" 
        message="We're crafting an immersive experience to showcase our team, our story, and the creative process behind Studio Narmak. Stay tuned!"
      />
      <main className="container mx-auto px-4 py-20 min-h-[60vh]">
        <h1 className="text-4xl font-display mb-8">Studio Narmak</h1>
        <p className="text-lg text-off-white/80 mb-12 max-w-2xl">
          Welcome to Studio Narmak - where creativity meets innovation in animation.
        </p>
        {/* Content will be hidden by overlay */}
      </main>
    </>
  );
} 