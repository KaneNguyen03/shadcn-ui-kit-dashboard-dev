import { generateMeta } from "@/lib/utils";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DownloadCloud, Link2Icon, Mail, MapPin, PhoneCall, Settings } from "lucide-react";
import { CompleteYourProfileComp } from "./complete-your-profile";

export async function generateMetadata() {
  return generateMeta({
    title: "Profile Page",
    description:
      "A page created with React and Tailwind CSS where users summary information and details are displayed.",
    canonical: "/pages/profile"
  });
}

export default function Page() {
  return (
    <>
      <div className="mb-4 flex items-center justify-between space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">Account Profile</h1>
        <div className="flex items-center space-x-2">
          <Button asChild>
            <Link href="/dashboard/pages/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </div>
      </div>

      <div className="mb-4 inline-flex items-center justify-center gap-2 rounded-md bg-muted p-2 text-muted-foreground">
        <Link
          href="/profile"
          data-state="active"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
          Overview
        </Link>
        <Link
          href="/profile/activities"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
          Activities
        </Link>
        <Link
          href="/profile/projects"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
          Projects
        </Link>
        <Link
          href="/profile/members"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
          Members
        </Link>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-1">
          <Card>
            <CardContent className="relative pt-6 lg:pt-12">
              <Badge className="absolute start-4 top-4">Pro</Badge>
              <div className="space-y-12">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage
                      src={`${process.env.DASHBOARD_BASE_URL}/images/avatars/10.png`}
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h5 className="text-lg font-semibold">Anshan Haso</h5>
                    <div className="text-sm text-muted-foreground">Project Manager</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x text-center">
                  <div>
                    <h5 className="text-lg font-semibold">184</h5>
                    <div className="text-sm text-muted-foreground">Post</div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">32</h5>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold">4.5K</h5>
                    <div className="text-sm text-muted-foreground">Members</div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4" /> anshan@gmail.com
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneCall className="h-4 w-4" /> (+1-876) 8654 239 581
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4" />
                    New York
                  </div>
                  <div className="flex items-center gap-3">
                    <Link2Icon className="h-4 w-4" />
                    <a
                      href="https://www.shadcnuikit.com"
                      className="hover:underline"
                      target="_blank">
                      https://shadcnuikit.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Complete Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <CompleteYourProfileComp />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 *:block *:rounded-lg *:border *:bg-slate-200 *:px-2 *:text-sm dark:*:bg-slate-900">
                <span>Photoshop</span>
                <span>Figma</span>
                <span>HTML</span>
                <span>React</span>
                <span>Tailwind CSS</span>
                <span>CSS</span>
                <span>Laravel</span>
                <span>Node.js</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4 lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Latest Activity</CardTitle>
                <Link href="/profile/activities" className="text-sm hover:underline">
                  View All
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-6">
                  <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <svg
                      className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                    Shadcn UI Kit Application UI v2.0.0 <Badge className="ms-2">Latest</Badge>
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on January 13th, 2022
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Get access to over 20+ pages including a dashboard layout, charts, kanban board,
                    calendar, and pre-order E-commerce & Marketing pages.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="#">
                      <DownloadCloud className="me-2 h-4 w-4" /> Download ZIP
                    </Link>
                  </Button>
                </li>
                <li className="mb-10 ms-6">
                  <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <svg
                      className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Shadcn UI Kit Figma v1.3.0
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 7th, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    All of the pages and components are first designed in Figma and we keep a parity
                    between the two versions even as we update the project.
                  </p>
                </li>
                <li className="ms-6">
                  <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                    <svg
                      className="h-2.5 w-2.5 text-blue-800 dark:text-blue-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Shadcn UI Kit Library v1.2.2
                  </h3>
                  <time className="mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 2nd, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive elements built on top
                    of Tailwind CSS.
                  </p>
                </li>
              </ol>
            </CardContent>
          </Card>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Hi I&#39;m Anna Adame, It will be as simple as Occidental; in fact, it will be
                  Occidental. To an English person, it will seem like simplified English, as a
                  skeptical Cambridge friend of mine told me what Occidental is European languages
                  are members of the same family.
                </p>
                <p>
                  You always want to make sure that your fonts work well together and try to limit
                  the number of fonts you use to three or less. Experiment and play around with the
                  fonts that you already have in the software you’re working with reputable font
                  websites. This may be the most commonly encountered tip I received from the
                  designers I spoke with. They highly encourage that you use different fonts in one
                  design, but do not over-exaggerate and go overboard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Olivia Davis</div>
                        <div className="text-xs text-muted-foreground">
                          olivia.davis@example.com
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-xs text-muted-foreground">john.doe@example.com</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Alice Smith</div>
                        <div className="text-xs text-muted-foreground">alice.smith@example.com</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                        <AvatarFallback>MJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Michael Johnson</div>
                        <div className="text-xs text-muted-foreground">
                          michael.johnson@example.com
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                        <AvatarFallback>EM</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Emily Martinez</div>
                        <div className="text-xs text-muted-foreground">
                          emily.martinez@example.com
                        </div>
                      </div>
                    </div>
                    <Button variant="destructive" size="sm">
                      Disconnect
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                        <AvatarFallback>JW</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">James Wilson</div>
                        <div className="text-xs text-muted-foreground">
                          james.wilson@example.com
                        </div>
                      </div>
                    </div>
                    <Button variant="destructive" size="sm">
                      Disconnect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
