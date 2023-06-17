import React from 'react'

function SocialProof() {
  return (
    <section className="bg-white pb-20 w-full px-52 dark:bg-gray-900">
  <div className="w-full   text-center lg:py-16 lg:px-">
      <dl className="grid w-full gap-8 text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-5xl text-gray-800 font-extrabold">79.000</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">Google recibe más de 79.000 búsquedas por segundo todos los días</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-5xl text-gray-800 font-extrabold">67,60%</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">Solo los primeros cinco resultados orgánicos representan el 67% de los clicks.</dd>
          </div>
          <div className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl md:text-5xl text-gray-800 font-extrabold">19,3%</dt>
              <dd className="font-light text-gray-500 dark:text-gray-400">La primera posición de resultados orgánicos de escritorio obtiene el 19,3% de los clics.</dd>
          </div>
      </dl>
  </div>
</section>
  )
}

export default SocialProof