import images from "./images";
import { travelPlace } from "./types";

const PLACES: travelPlace[] = [
  {
    id: "1",
    name: "Madri",
    img: images.espanha,
    rating: "4.5",
    countrie: "Espanha",
    price: "1,200",
    reviews: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a taype specimen book.",
    gallery: [
      "https://media.istockphoto.com/photos/tower-bridge-london-londres-at-dusk-england-milkyway-picture-id804445402?b=1&k=20&m=804445402&s=170667a&w=0&h=aOXFr_Ei6GDAon4zo45nzXb9hYSp_SX1w0RGYWBfFPo=",
      "https://media.istockphoto.com/photos/church-on-barrio-parislondres-santiago-de-chile-picture-id1352678227?b=1&k=20&m=1352678227&s=170667a&w=0&h=KSbjBn3y0rYjY5v8-fbW-sy_dINxJyODN9C1D98n9zc=",
      "https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589657068463-ef4077ce0d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: "2",
    name: "Londres",
    img: images.londres,
    rating: "4.5",
    countrie: "Inglaterra",
    price: "1,200",
    reviews: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a taype specimen book.",
    gallery: [
      "https://media.istockphoto.com/photos/tower-bridge-london-londres-at-dusk-england-milkyway-picture-id804445402?b=1&k=20&m=804445402&s=170667a&w=0&h=aOXFr_Ei6GDAon4zo45nzXb9hYSp_SX1w0RGYWBfFPo=",
      "https://media.istockphoto.com/photos/church-on-barrio-parislondres-santiago-de-chile-picture-id1352678227?b=1&k=20&m=1352678227&s=170667a&w=0&h=KSbjBn3y0rYjY5v8-fbW-sy_dINxJyODN9C1D98n9zc=",
      "https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589657068463-ef4077ce0d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: "3",
    name: "Navagio",
    img: images.navagio,
    rating: "5.0",
    countrie: "Grécia",
    price: "1,200",
    reviews: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a taype specimen book.",
    gallery: [
      "https://media.istockphoto.com/photos/aerial-view-on-navagio-sandy-beach-with-famous-shipwreck-on-north-picture-id1334473347?b=1&k=20&m=1334473347&s=170667a&w=0&h=ZVv1EerT9lk9BamMdSmcNbcpq2aF7HVnK8P2dcdoeRU=",
      "https://images.unsplash.com/photo-1468296320602-73cc55315f25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bmF2YWdpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1630398865075-67f3fa8fcddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdmFnaW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1532189406528-86316fa63c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmF2YWdpb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://media.istockphoto.com/photos/view-of-crowded-navagio-beach-on-zakynthos-picture-id1306532566?b=1&k=20&m=1306532566&s=170667a&w=0&h=ohXr5CgzoTDGvFUtj4hpQt5O-hkVBH-Ml3GaJsqRmJE="
    ],
  },

  {
    id: "4",
    name: "New York",
    img: images.newYork,
    rating: "5.0",
    countrie: "EUA",
    price: "1,200",
    reviews: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a taype specimen book.",
    gallery: [
      "https://media.istockphoto.com/photos/tower-bridge-london-londres-at-dusk-england-milkyway-picture-id804445402?b=1&k=20&m=804445402&s=170667a&w=0&h=aOXFr_Ei6GDAon4zo45nzXb9hYSp_SX1w0RGYWBfFPo=",
      "https://media.istockphoto.com/photos/church-on-barrio-parislondres-santiago-de-chile-picture-id1352678227?b=1&k=20&m=1352678227&s=170667a&w=0&h=KSbjBn3y0rYjY5v8-fbW-sy_dINxJyODN9C1D98n9zc=",
      "https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589657068463-ef4077ce0d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: "5",
    name: "Rio de Janeiro",
    img: images.rioJaneiro,
    rating: "4.0",
    countrie: "Brasil",
    price: "1,200",
    reviews: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a taype specimen book.",
    gallery: [
      "https://media.istockphoto.com/photos/tower-bridge-london-londres-at-dusk-england-milkyway-picture-id804445402?b=1&k=20&m=804445402&s=170667a&w=0&h=aOXFr_Ei6GDAon4zo45nzXb9hYSp_SX1w0RGYWBfFPo=",
      "https://media.istockphoto.com/photos/church-on-barrio-parislondres-santiago-de-chile-picture-id1352678227?b=1&k=20&m=1352678227&s=170667a&w=0&h=KSbjBn3y0rYjY5v8-fbW-sy_dINxJyODN9C1D98n9zc=",
      "https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589657068463-ef4077ce0d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: "6",
    name: "Siberia",
    img: images.russia,
    rating: "4.5",
    countrie: "Rússia",
    price: "1,200",
    reviews: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a taype specimen book.",
    gallery: [
      "https://media.istockphoto.com/photos/tower-bridge-london-londres-at-dusk-england-milkyway-picture-id804445402?b=1&k=20&m=804445402&s=170667a&w=0&h=aOXFr_Ei6GDAon4zo45nzXb9hYSp_SX1w0RGYWBfFPo=",
      "https://media.istockphoto.com/photos/church-on-barrio-parislondres-santiago-de-chile-picture-id1352678227?b=1&k=20&m=1352678227&s=170667a&w=0&h=KSbjBn3y0rYjY5v8-fbW-sy_dINxJyODN9C1D98n9zc=",
      "https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589657068463-ef4077ce0d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
  {
    id: "7",
    name: "Shipwreck Beach",
    img: images.shipwreckBeach,
    rating: "4.5",
    countrie: "Grécia",
    price: "1,200",
    reviews: 12,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a taype specimen book.",
    gallery: [
      "https://media.istockphoto.com/photos/tower-bridge-london-londres-at-dusk-england-milkyway-picture-id804445402?b=1&k=20&m=804445402&s=170667a&w=0&h=aOXFr_Ei6GDAon4zo45nzXb9hYSp_SX1w0RGYWBfFPo=",
      "https://media.istockphoto.com/photos/church-on-barrio-parislondres-santiago-de-chile-picture-id1352678227?b=1&k=20&m=1352678227&s=170667a&w=0&h=KSbjBn3y0rYjY5v8-fbW-sy_dINxJyODN9C1D98n9zc=",
      "https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1589657068463-ef4077ce0d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1600454021970-351eff4a6554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9uZHJlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
  },
];

export { PLACES };
