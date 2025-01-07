"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CoinSelectProps {
  isCollapsed: boolean;
  coins: {
    label: string;
    icon: React.ReactNode;
  }[];
}

const coins = [
  {
    name: "Bitcoin",
    short_name: "BTC",
    icon: "bitcoin"
  },
  {
    name: "Avalanche",
    short_name: "AVAX",
    icon: "avalanche"
  },
  {
    name: "Ethereum",
    short_name: "ETH",
    icon: "ethereum"
  },
  {
    name: "Solana",
    short_name: "SOL",
    icon: "solana"
  },
  {
    name: "Tether",
    short_name: "USDT",
    icon: "tether"
  },
  {
    name: "XRP",
    short_name: "XRP",
    icon: "xrp"
  },
  {
    name: "Dogecoin",
    short_name: "DOGE",
    icon: "dogecoin"
  }
];

export default function CoinBuySell() {
  const form = useForm();
  const [selectedCoin, setSelectedCoin] = useState<string>(coins[0].name);
  const [transactionType, setTransactionType] = useState<string>("buy");

  return (
    <>
      <Card className="lg:col-span-6 xl:col-span-2">
        <CardHeader>
          <CardTitle className="flex justify-between">Trading</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="buy" onValueChange={setTransactionType}>
            <TabsList className="mb-4 w-full">
              <TabsTrigger className="w-full" value="buy">
                Buy
              </TabsTrigger>
              <TabsTrigger className="w-full" value="sell">
                Sell
              </TabsTrigger>
            </TabsList>
            <TabsContent value="buy">
              <Form {...form}>
                <form className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <div className="space-y-2">
                        <FormItem>
                          <FormLabel>Coin Name</FormLabel>
                          <FormControl>
                            <Select defaultValue={selectedCoin} onValueChange={setSelectedCoin}>
                              <SelectTrigger>
                                <SelectValue>
                                  <div className="flex items-center gap-2">
                                    <img
                                      className="h-6 w-6"
                                      src={`${process.env.DASHBOARD_BASE_URL}/cyripto-icons/${coins.find((coin) => coin.name === selectedCoin)?.icon}.svg`}
                                    />
                                    {coins.find((coin) => coin.name === selectedCoin)?.name}/
                                    {coins.find((coin) => coin.name === selectedCoin)?.short_name}
                                  </div>
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                {coins.map((coin) => (
                                  <SelectItem key={coin.name} value={coin.name}>
                                    <div className="flex items-center gap-2">
                                      <img
                                        className="h-6 w-6"
                                        src={`${process.env.DASHBOARD_BASE_URL}/cyripto-icons/${coin.icon}.svg`}
                                      />
                                      {coin.name}/{coin.short_name}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    )}
                  />
                  <div className="grid space-x-4 lg:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <div className="space-y-2">
                          <FormItem>
                            <FormLabel>Amount (BTC)</FormLabel>
                            <FormControl>
                              <Input value="$0,0000005" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <div className="space-y-2">
                          <FormItem>
                            <FormLabel>Amount (USD)</FormLabel>
                            <FormControl>
                              <Input value="0,0000005" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </div>
                      )}
                    />
                  </div>
                  <Button className="w-full">Make Payment</Button>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="sell">
              <Form {...form}>
                <form className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <div className="space-y-2">
                        <FormItem>
                          <FormLabel>Coin Name</FormLabel>
                          <FormControl>
                            <Select defaultValue={selectedCoin} onValueChange={setSelectedCoin}>
                              <SelectTrigger>
                                <SelectValue>
                                  <div className="flex items-center gap-2">
                                    <img
                                      className="h-6 w-6"
                                      src={`${process.env.DASHBOARD_BASE_URL}/cyripto-icons/${coins.find((coin) => coin.name === selectedCoin)?.icon}.svg`}
                                    />
                                    {coins.find((coin) => coin.name === selectedCoin)?.name}/
                                    {coins.find((coin) => coin.name === selectedCoin)?.short_name}
                                  </div>
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent>
                                {coins.map((coin) => (
                                  <SelectItem key={coin.name} value={coin.name}>
                                    <div className="flex items-center gap-2">
                                      <img
                                        className="h-6 w-6"
                                        src={`${process.env.DASHBOARD_BASE_URL}/cyripto-icons/${coin.icon}.svg`}
                                      />
                                      {coin.name}/{coin.short_name}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    )}
                  />
                  <div className="grid space-x-4 lg:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <div className="space-y-2">
                          <FormItem>
                            <FormLabel>Amount (BTC)</FormLabel>
                            <FormControl>
                              <Input value="$0,0000005" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </div>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <div className="space-y-2">
                          <FormItem>
                            <FormLabel>Amount (USD)</FormLabel>
                            <FormControl>
                              <Input value="0,0000005" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        </div>
                      )}
                    />
                  </div>
                  <Button className="w-full">Place Offer</Button>
                </form>
              </Form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
}
