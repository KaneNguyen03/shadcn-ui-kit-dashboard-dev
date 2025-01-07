import { Card, CardContent } from "@/components/ui/card";

export default function FiatAccounts() {
  return (
    <>
      <a href="#" className="block">
        <Card className="hover:border-primary/30">
          <CardContent className="px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <img
                className="h-6 w-6 object-contain"
                src="/cyripto-icons/tron.svg"
              />
              <span>Tron Wallet</span>
            </div>
            <div>3.434953 ETH</div>
          </CardContent>
        </Card>
      </a>
      <a href="#" className="block">
        <Card className="hover:border-primary/30">
          <CardContent className="px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <img
                className="h-6 w-6 object-contain"
                src="/cyripto-icons/xrp.svg"
              />
              <span>XRP Wallet</span>
            </div>
            <div>3.434953 XRP</div>
          </CardContent>
        </Card>
      </a>
      <a href="#" className="block">
        <Card className="hover:border-primary/30">
          <CardContent className="px-4 py-3">
            <div className="mb-2 flex items-center gap-2">
              <img
                className="h-6 w-6 object-contain"
                src="/cyripto-icons/tether.svg"
              />
              <span>Tether Wallet</span>
            </div>
            <div>3.434953 XRP</div>
          </CardContent>
        </Card>
      </a>
    </>
  );
}
