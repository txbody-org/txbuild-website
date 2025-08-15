import { Button } from "@/components/ui/button";

export default function ExampleCode() {
  return (
    <>
      <main className="relative overflow-hidden">
        <div className="relative px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:gap-12 items-center">
            <div className="relative corner-decoration order-2 lg:order-none">
              <div className="bg-black p-6 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono">
                  <code>
                    {`# Upload your blueprint
curl -X POST https://api.txbuild.io/v1/projects \\
  -H "Content-Type: application/json" \\
  -F "blueprint=@your-contract.json"

# Get instant API endpoints
{
  "project_id": "proj_abc123",
  "endpoints": {
    "query_datum": "https://api.txbuild.io/v1/proj_abc123/datum",
    "build_tx": "https://api.txbuild.io/v1/proj_abc123/transactions",
    "sync_status": "https://api.txbuild.io/v1/proj_abc123/sync"
  },
  "webhook_url": "https://api.txbuild.io/v1/proj_abc123/webhooks",
  "docs_url": "https://docs.txbuild.io/proj_abc123"
}`}
                  </code>
                </pre>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 lg:w-4 lg:h-4 border border-logo-color transform rotate-45"></div>
                <span className="uppercase tracking-wider text-logo">
                  TxBuild CORE
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                From Blueprint to API
                <span className="block"> in Seconds</span>
              </h1>

              <p className="text-sm lg:text-lg text-gray-500 leading-relaxed max-w-lg">
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
                  Start Building Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
