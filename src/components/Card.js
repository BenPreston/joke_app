import './cards.scss';

function Card({ setup, delivery, category }) {
  const images = {
    Any:
      'https://image.freepik.com/free-psd/abstract-background-design_1297-88.jpg',
    Misc:
      'https://image.freepik.com/free-vector/hexagonal-technology-pattern-mesh-background-with-text-space_1017-26293.jpg',
    Programming:
      'https://image.freepik.com/free-vector/futuristic-wavy-dots-background_23-2148769628.jpg',
    Pun:
      'https://image.freepik.com/free-photo/empty-wooden-table-with-smoke-float-up-dark-background_68495-135.jpg',
    Spooky:
      'https://image.freepik.com/free-photo/room-with-concrete-floor-smoke-background_9083-2991.jpg',
    Christmas:
      'https://images.pexels.com/photos/1303086/pexels-photo-1303086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  };

  const image = images[category];

  return (
    <div class="flip">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        class="front"
      >
        <h3 class="text-shadow">{setup}</h3>
      </div>
      <div class="back">
        <h3>{delivery}</h3>
      </div>
    </div>
  );
}

export default Card;
