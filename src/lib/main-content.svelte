<script>
  let cars = [
    {
      id: 1,
      type: 'Sedans',
      description:
        'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
      iconPath: '/assets/icon-sedans.svg',
      customBackgroundColor: 'bg-cstm-primary-bright-orange',
      customTextColor: 'text-cstm-primary-bright-orange',
    },
    {
      id: 2,
      type: 'SUVs',
      description:
        'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
      iconPath: '/assets/icon-suvs.svg',
      customBackgroundColor: 'bg-cstm-primary-dark-cyan',
      customTextColor: 'text-cstm-primary-dark-cyan',
    },
    {
      id: 3,
      type: 'Luxury',
      description:
        'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
      iconPath: '/assets/icon-luxury.svg',
      customBackgroundColor: 'bg-cstm-primary-very-dark-cyan',
      customTextColor: 'text-cstm-primary-very-dark-cyan',
    },
  ]
</script>

<main class="flex-1 flex flex-col justify-center">
  <div class="md:max-w-5xl md:mx-auto mt-20 px-5 md:grid md:grid-cols-3">
    {#each cars as car}
      <div
        class={`${car.customBackgroundColor} p-10 md:p-12 text-white first:rounded-t-lg md:first:rounded-none md:first:rounded-l-lg last:rounded-b-lg md:last:rounded-none md:last:rounded-r-lg`}
      >
        <div class="md:flex md:flex-col md:items-baseline md:justify-end">
          <div>
            <img src={car.iconPath} alt={car.type} />
            <p class="font-big-shoulders-display uppercase text-4xl py-10">
              {car.type}
            </p>
            <p class="font-lexend-deca text-cstm-neutral-transparent-white">
              {car.description}
            </p>
          </div>
          <button
            class={`font-lexend-deca mt-8 md:mt-32 bg-white hover:bg-transparent ${car.customTextColor} hover:text-cstm-neutral-light-gray hover:outline hover:outline-2 hover:outline-cstm-neutral-light-gray py-4 px-8 rounded-full`}
            >Learn More</button
          >
        </div>
      </div>
    {/each}
  </div>
</main>
