import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
    BanknoteIcon,
    GoalIcon,
    HomeIcon,
    LogOutIcon,
    Package,
    PanelBottom,
    Settings2Icon,
    WalletIcon
} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export function Sidebar(){
    return(
        <div className="flex w-full flex-col bg-muted/40">


            <aside
                className="fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex">

                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link
                            href="#"
                            className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary
                            text-primary-foreground rounded-full">

                            <Package className="h-4 w-4"/>
                            <span className="sr-only">Logo</span>

                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground">

                                    <HomeIcon className="h-5 w-5"/>
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Dashboard</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground">

                                    <WalletIcon className="h-5 w-5"/>
                                    <span className="sr-only">Transações</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Transações</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground">

                                    <BanknoteIcon className="h-5 w-5"/>
                                    <span className="sr-only">Reservas</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Reservas</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground">

                                    <GoalIcon className="h-5 w-5"/>
                                    <span className="sr-only">Metas</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Metas</TooltipContent>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="#"
                                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground">

                                    <Settings2Icon className="h-5 w-5"/>
                                    <span className="sr-only">Configurações</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Configurações</TooltipContent>
                        </Tooltip>

                        <nav className="mt-auto flex flex-col items-center gap-4 py-5 ">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link
                                            href="#"
                                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                                    text-muted-foreground transition-colors hover:text-foreground">

                                            <LogOutIcon className="h-5 w-5 text-red-500"/>
                                            <span className="sr-only">Sair</span>
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">Sair</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </nav>

                    </TooltipProvider>
                </nav>
            </aside>


            {/* sidebar mobile*/}
            <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
                <header
                    className="sticky top-0 z-30 flex h-14 items-center px-4 border-b
                bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sx:px-6"
                >
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden">
                                <PanelBottom className="w-5 h-5" />
                                <span className='sr-only'>Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-x">
                           <nav className="grid gap-6 text-lg font-medium p-6">
                               <Link
                                   href="#"
                                   className="flex h-10 w-10 bg-primary rounded-full text-lg
                                   items-center justify-center text-primary-foreground md:text-base
                                   gap-2"
                                   prefetch={false}
                               >
                                   <Package className="h-5 w-5 transition-all"/>
                                   <span className="sr-only">Logo</span>
                               </Link>

                               <Link
                                   href="#"
                                   className="flex items-center gap-4 px-2.5 text-muted-foreground
                                   hover:text-foreground"
                                   prefetch={false}
                               >
                                   <HomeIcon className="h-5 w-5 transition-all"></HomeIcon>
                                   Início
                               </Link>

                               <Link
                                   href="#"
                                   className="flex items-center gap-4 px-2.5 text-muted-foreground
                                   hover:text-foreground"
                                   prefetch={false}
                               >
                                   <WalletIcon className="h-5 w-5 transition-all"></WalletIcon>
                                   Transações
                               </Link>

                               <Link
                                   href="#"
                                   className="flex items-center gap-4 px-2.5 text-muted-foreground
                                   hover:text-foreground"
                                   prefetch={false}
                               >
                                   <BanknoteIcon className="h-5 w-5 transition-all"></BanknoteIcon>
                                   Reservas
                               </Link>

                               <Link
                                   href="#"
                                   className="flex items-center gap-4 px-2.5 text-muted-foreground
                                   hover:text-foreground"
                                   prefetch={false}
                               >
                                   <GoalIcon className="h-5 w-5 transition-all"></GoalIcon>
                                   Metas
                               </Link>
                           </nav>
                        </SheetContent>
                    </Sheet>
                </header>

            </div>
        </div>
    );
}