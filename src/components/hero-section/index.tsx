import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <main className="relative overflow-hidden">
        <div className="relative px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 border border-logo-color transform rotate-45"></div>
                <span className="uppercase tracking-wider text-logo">
                  TxBuild CORE
                </span>
              </div>
              <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
                Instant Cardano APIs{" "}
                <span className="block">from Plutus Blueprints</span>
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                Upload your Plutus blueprint file and get automatically
                generated APIs for querying datums, building unsigned
                transactions, and syncing blockchain data. No manual
                integration, no complex setups.
              </p>

              <div className="pt-4">
                <Button
                  variant="default"
                  className=" px-8 py-3 uppercase tracking-wider"
                >
                  Get Started free
                </Button>
              </div>
            </div>
            <div className="relative corner-decoration">
              <div className="">
                <video
                  src="https://cdn.sanity.io/files/xupoa92h/production/708e4c93162853b0ac88e4bc390d88507166b70d.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
