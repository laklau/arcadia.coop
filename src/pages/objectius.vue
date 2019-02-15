<template>
  <Layout>
    <main>
      <section class="px-4 md:px-8 lg:px-32 pt-20 lg:pt-32 pb-20 lg:pb-32 bg-grey-lightest">
        <h2
          class="text-2xl sm:text-3xl text-center text-green-dark font-semibold leading-tight"
        >L’Arcàdia treballa en tres àmbits ben definits:</h2>
        <div class="flex flex-wrap md:flex-no-wrap">
          <div class="sm:flex-1 py-8 sm:pt-12 sm:pb-0">
            <div class="px-8 sm:-ml-8 mb-6 w-16 h-16">
              <img src="/assets/icons/entornfamiliar.svg" alt="icon">
            </div>
            <h5
              class="px-8 sm:-ml-8 lg:px-12 lg:-ml-12 pb-8 text-grey-darker font-semibold text-base leading-tight"
            >L'entorn familiar</h5>
            <p class="px-8 lg:px-12 sm:-ml-8 lg:-ml-12 text-base text-grey-dark leading-normal">
              Oferir una atenció, servei i possibilitat de participació segons necessitats i interessos, sempre vetllant amb especial cura i sensibilitat per a aquelles
              famílies que per la
              seva situació ho requereixin.
            </p>
          </div>
          <div class="sm:flex-1 py-8 sm:pt-12 sm:pb-0">
            <div class="px-8 sm:-ml-8 mb-6 w-16 h-16">
              <img src="/assets/icons/desenvolupamentinfancia.svg" alt="icon">
            </div>
            <h5
              class="px-8 sm:-ml-8 pb-8 text-grey-darker font-semibold text-base leading-tight"
            >El desenvolupament de la infància</h5>
            <p class="px-8 sm:-ml-8 text-base text-grey-dark leading-normal">
              Crear un entorn físic i humà de plena acceptació on cada nen i cada nena pugui desenvolupar lliurement el dret irrenunciable a construir el seu propi relat
              de vida sense
              ingerències dogmàtiques ni prejudicis.
            </p>
          </div>
          <div class="sm:flex-1 py-8 sm:pt-12 sm:pb-0">
            <div class="px-8 sm:-ml-8 lg:px-12 -mr-8 lg:-mr12 mb-6 w-16 h-16">
              <img src="/assets/icons/entornsocial.svg" alt="icon">
            </div>
            <h5
              class="px-8 lg:px-12 -mr-8 lg:-mr12 pb-8 text-grey-darker font-semibold text-base leading-tight"
            >L' entorn social</h5>
            <p class="px-8 lg:px-12 -mr-8 lg:-mr-12 text-base text-grey-dark leading-normal">
              Cercar la participació i el consens social sobre la base d'una ètica de mínims a partir d'una comunitat deliberativa instrumental com a mecanisme
              d'intersecció social de les
              diferents realitats de l'entorn.
            </p>
          </div>
        </div>
      </section>
      <section class="flex flex-wrap lg:flex-no-wrap">
        <div class="lg:w-1/2 px-4 md:px-32 xl:pr-32 lg:pr-8 py-20 lg:py-32 md:pt-32">
          <header class="py-8">
            <h2
              class="text-2xl sm:text-3xl text-red-dark font-semibold leading-tight"
            >Una experiència escolar basada en la cooperació comunitària</h2>
          </header>
          <article class="pb-8 leading-normal">
            <p>La idea més atractiva pel projecte és la possibilitat de transcendir els murs escolars i que els nens i les nenes puguin viure, conviure i aprendre, en un entorn comunitari com Can Batlló.</p>
          </article>
        </div>
        <div class="lg:w-1/2">
          <div
            class="bg-cover bg-center h-full a1-img-clippath-r hidden lg:flex lg:flex-grow lg:items-stretch"
            style="background-image: url('https://staging--arcadia-coop.netlify.com/assets/uploads/cooperaciocomunitaria.jpg')"
          ></div>
          <div class="lg:hidden" style="line-height: 0">
            <img
              class
              src="https://staging--arcadia-coop.netlify.com/assets/uploads/cooperaciocomunitaria.jpg"
              alt="descripció de la imatge"
            >
          </div>
        </div>
      </section>
      <section class="flex flex-wrap lg:flex-no-wrap lg:flex-row-reverse">
        <div class="lg:w-1/2 px-4 md:px-32 xl:pr-32 lg:pr-8 py-20 lg:py-32 md:pt-32">
          <header class="py-8">
            <h2
              class="text-2xl sm:text-3xl text-red-dark font-semibold leading-tight"
            >Una experiència escolar basada en la llibertat responsable</h2>
          </header>
          <article class="pb-8 leading-normal">
            <p>Perquè una experiència escolar basada en la llibertat responsable, l’autonomia, el respecte i la cooperació, transmet unes habilitats socials que projecta a les persones cap a una societat més lliure i menys violenta.</p>
          </article>
        </div>
        <div class="lg:w-1/2">
          <div
            class="bg-cover bg-center h-full a1-img-clippath-l hidden lg:flex lg:flex-grow lg:items-stretch"
            style="background-image: url('https://staging--arcadia-coop.netlify.com/assets/uploads/psicomotricidad.jpg')"
          ></div>
          <div class="lg:hidden" style="line-height: 0">
            <img
              class
              src="https://staging--arcadia-coop.netlify.com/assets/uploads/psicomotricidad.jpg"
              alt="descripció de la imatge"
            >
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {};
</script>