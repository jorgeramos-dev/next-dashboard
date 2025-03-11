"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {DollarSign} from "lucide-react";
import {ChartContainer, ChartConfig, ChartTooltipContent, ChartTooltip} from "@/components/ui/chart";
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";


export default function ChartTrasacoes() {
    const chartData = [
        { month: "Janeiro", entrada: 186, saida: 80 },
        { month: "Fevereiro", entrada: 305, saida: 200 },
        { month: "Março", entrada: 237, saida: 120 },
        { month: "Abril", entrada: 73, saida: 190 },
        { month: "Maio", entrada: 209, saida: 130 },
        { month: "Junho", entrada: 214, saida: 140 },
    ]

    const chartConfig = {
        entrada: {
            label: "Entradas",
            color: "#016630",
        },
        saida: {
            label: "Saídas",
            color: "#9f0712",
        },
    } satisfies ChartConfig

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Overview de Transações
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

                        <Bar dataKey="entrada" fill="var(--color-entrada)" radius={4}/>
                        <Bar dataKey="saida" fill="var(--color-saida)" radius={4}/>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}