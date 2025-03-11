"use client"

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {DollarSign} from "lucide-react";
import {ChartContainer, ChartConfig, ChartTooltipContent, ChartTooltip} from "@/components/ui/chart";
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";


export default function ChartReservas() {
    const chartData = [
        { month: "Janeiro", reserva: 186 },
        { month: "Fevereiro", reserva: 305},
        { month: "Março", reserva: 237 },
        { month: "Abril", reserva: 73 },
        { month: "Maio", reserva: 209 },
        { month: "Junho", reserva: 214 },
    ]

    const chartConfig = {
        reserva: {
            label: "Reserva",
            color: "#193cb8",
        },
    } satisfies ChartConfig

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Overview de Reservas
                    </CardTitle>
                    <DollarSign className="ml-auto w-4 h-4"></DollarSign>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value)=> value.slice(0,3)}
                        />

                        <ChartTooltip content={<ChartTooltipContent />} />

                        <Bar dataKey="reserva" fill="var(--color-reserva)" radius={4}/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}