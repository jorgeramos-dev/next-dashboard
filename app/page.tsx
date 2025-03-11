import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {DollarSignIcon, PercentCircleIcon, PercentIcon} from "lucide-react";
import ChartTrasacoes from "@/components/trasacoes";
import ChartReservas from "@/components/reservas";
import MetasCharts from "@/components/metas";
import ChartsRecentes from "@/components/recentes";

export default function Home() {
  return (
      <main className="sm:ml-14 p-4">

          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
                <CardHeader>
                   <div className="flex items-center justify-center">
                       <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                           Total Entradas
                       </CardTitle>
                       <DollarSignIcon className="ml-auto w-4 h-4"></DollarSignIcon>
                   </div>

                    <CardDescription>
                        Total entradas em 30 dias
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <p className="text-base sm:text-lg font-bold text-green-800">+ R$ 40.000</p>
                </CardContent>
            </Card>

          <Card>
              <CardHeader>
                  <div className="flex items-center justify-center">
                      <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                          Total Saídas
                      </CardTitle>
                      <DollarSignIcon className="ml-auto w-4 h-4"></DollarSignIcon>
                  </div>

                  <CardDescription>
                      Total saídas em 30 dias
                  </CardDescription>
              </CardHeader>

              <CardContent>
                  <p className="text-base sm:text-lg font-bold text-red-800">- R$ 5.636</p>
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                  <div className="flex items-center justify-center">
                      <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                          Total Reserva
                      </CardTitle>
                      <DollarSignIcon className="ml-auto w-4 h-4"></DollarSignIcon>
                  </div>

                  <CardDescription>
                      Total reserva em 30 dias
                  </CardDescription>
              </CardHeader>

              <CardContent>
                  <p className="text-base sm:text-lg font-bold text-blue-800">+ R$ 40.000</p>
              </CardContent>
          </Card>

          <Card>
              <CardHeader>
                  <div className="flex items-center justify-center">
                      <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                          Total Metas
                      </CardTitle>
                      <PercentCircleIcon className="ml-auto w-5 h-5"></PercentCircleIcon>
                  </div>
                  <CardDescription>
                      Total metas
                  </CardDescription>
              </CardHeader>

              <CardContent>
                  <p className="text-base sm:text-lg font-bold text-amber-800">80%</p>
              </CardContent>
          </Card>
          </section>

          <section className="mt-4 flex flex-col md:flex-row grid grid-cols-1 lg:grid-cols-3 gap-3">
              <ChartTrasacoes></ChartTrasacoes>
              <ChartReservas></ChartReservas>
              <MetasCharts></MetasCharts>
          </section>
          <section className="mt-6 flex flex-col">
              <ChartsRecentes></ChartsRecentes>
          </section>
      </main>

  );
}
