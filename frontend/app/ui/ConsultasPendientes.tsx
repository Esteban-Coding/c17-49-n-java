import Image from 'next/image';
import Link from 'next/link';
import { especialidades } from '@/mocks/especialidad.json';

export const ConsultasPendientes = () => {
  const fechaHoraActual = new Date();

  const doctores = especialidades[0].doctores;
  return (
    <div className="flex flex-col gap-2 mt-5 px-4 md:px-0 md:w-full h-[200px]">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6">
        <div className="inline-block min-w-full py-2 align-middle md:px-6">
          <div className="h-[200px] md:w-full scroll-container overflow-y-scroll overflow-x-scroll pb-2 border border-gray-200 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-300">
              <thead className="bg-mlt-700 overflow-y-scroll sticky top-0 ">
                <tr>
                  <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                    Especialidad
                  </th>

                  <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                    Médico
                  </th>

                  <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                    Fecha
                  </th>

                  <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                    Hora
                  </th>

                  <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white">
                    Tipo de consulta
                  </th>

                  <th className="relative py-3.5 px-4">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>

              {doctores?.map((doctor: any) => (
                <tbody className="bg-white" key={especialidades[0].nombre + Math.random()}>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-black whitespace-nowrap">
                      <div className="inline-flex items-center gap-x-3">
                        <span>{especialidades[0].nombre}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                      <div className="flex flex-cols items-center gap-x-2">
                        <Image
                          className="object-cover w-8 h-8 rounded-full"
                          src={`/imageProfile/${doctor.image}`}
                          alt="imagen"
                          width={50}
                          height={50}
                        />
                        <div>
                          <h2 className="text-sm font-medium text-gray-800 dark:text-black ">
                            {doctor.nombre}
                          </h2>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-black dark:text-black whitespace-nowrap">
                      {doctor.fechaAtencion}
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                      <div className="inline-flex items-center text-mlt-700 ">
                        <h2 className="text-sm font-normal">{doctor.horarioAtencion}</h2>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-black ">Virtual</td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <div className="flex items-center gap-x-6">
                        <Link
                          href="atencionVirtual"
                          className="text-mlt-700 transition-colors duration-200 dark:hover:text-mlt-800 hover:text-mlt-800 focus:outline-none">
                          Ingresar
                        </Link>
                        <button className="text-white bg-mlt-700 hover:bg-mlt-800 hover:scale-105 duration-300  transition-colors focus:outline-none font-semibold md:font-medium rounded-xl md:rounded-full text-xs md:text-sm text-center px-1 w-[100px] h-[40px] md:mx-2 md:h-10">
                          Cancelar cita
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
