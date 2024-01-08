import { Container } from "@/app/_style-components/home-page-css/Container";
import { PlantCareCss } from "@/app/_style-components/plant-care/PlantCareCss";
import React from "react";

const PlantCare = () => {
  const plant_care = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/airplant_insta1-1674008634387.jpg?v=1674008710",
      name: "Air Plant",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_alocasia_blackvelvet_2-1674008633605.jpg?v=1674008733",
      name: "Alocasia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_succ_aloe_vera_2-1674251531858.jpg?v=1674251536",
      name: "Aloe",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_anthurium_red_2-1-1674008633625.jpg?v=1674008736",
      name: "Anthurium",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/89.jpg?v=1699006742",
      name: "Apoballis",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_arabica_coffee_2-1674008633636.jpg?v=1674008739",
      name: "Arabica",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_aralia_fabianstump_2-1674008634069.jpg?v=1674008655",
      name: "Aralia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_begonia_maculata_2-1674008633657.jpg?v=1674008743",
      name: "Begonia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_strelitzia_birdofparadise_2-1674008634309.jpg?v=1674008699",
      name: "Bird of Paradise",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_bromeliad_medusa_2-1-1674008634090.jpg?v=1674008659",
      name: "Bromeliad",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_succ_cactus_fairycastle_2-1662587849767.jpg?v=1662587871",
      name: "Cactus",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_calathea_medallion_2-1674008634114.jpg?v=1674008662",
      name: "Calathea",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_chevergreen_redsiam_2-1674511008549.jpg?v=1674511010",
      name: "Chinese Evergreen",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/4_CLUSIA_PRINCESS_2.jpg?v=1692315089",
      name: "Clusia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_cordyline_glauca_2-1674008634156.jpg?v=1674008671",
      name: "Cordyline",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_croton_petra_2-1674008634179.jpg?v=1674008675",
      name: "Croton",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_cryptanthus_pinkstar_2-1674008633674.jpg?v=1674008746",
      name: "Cryptanthus",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_ctenanthe_yellow_2-1674507345245.jpg?v=1674507359",
      name: "Ctenanthe",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/3_dieffenbachia_camille_2-1674008633591.jpg?v=1674008729",
      name: "Dieffenbachia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_dracaena_massangeana_2-1674008633692.jpg?v=1674008750",
      name: "Dracaena",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_fern_maidenhair_4-1674008633708.jpg?v=1674008753",
      name: "Fern",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/146.jpg?v=1698997919",
      name: "Epiphyllum",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_ficus_burgundy_2-1674008634193.jpg?v=1674008678",
      name: "Ficus",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_ficus_lyrata_2-1-1674008634220.jpg?v=1674008681",
      name: "Fiddle Leaf Fig",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_fittonia_pink_2-1670959476204.jpg?v=1670959483",
      name: "Fittonia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-3e7a8c2b--1GuzmaniaRed4-DETAIL.jpg?v=1608687608",
      name: "Guzmania (Bromeliad)",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-b51a06f1--1HerbRosemary4-DETAIL.jpg?v=1609800334",
      name: "Herbs",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/4_HOMALOMENA_SELBY_2_64aada97-4930-48db-8c97-3a15d02e822d.jpg?v=1683317865",
      name: "Homalomena",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_hoya_publicalyx_2-1674008633743.jpg?v=1674008760",
      name: "Hoya",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/16.jpg?v=1698954462",
      name: "Hydrangea",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_hypoestes_combo_2-1673473660235.jpg?v=1673473672",
      name: "Hypoestes",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/2_ivy_glacier_2-1674008633560.jpg?v=1674008723",
      name: "Ivy",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/kokedama-moss-ball--njoy_with-beads-1674008634399.jpg?v=1674008714",
      name: "Kokedama",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_lipstick_blackpagoda_2-1674008633790.jpg?v=1674008767",
      name: "Lipstick",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_maranta_red_2-1-1674008633846.jpg?v=1674008773",
      name: "Maranta",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-6f2b2bfe--1PachiraBraid4-DETAIL.jpg?v=1610416646",
      name: "Money Tree",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_monstera_deliciosa_2-1674008634265.jpg?v=1674008689",
      name: "Monstera",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_nematanthus_blackgoldfish_2-1-1674008634283.jpg?v=1674008693",
      name: "Nematanthus",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4nettlesilver-sparkledetail-1-1674008634033.jpg?v=1674008647",
      name: "Nettle",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/main_5d65a3cf-4db1-40cf-a183-e9a0df1947d4.jpg?v=1698959794",
      name: "Olive",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_orchid_phalaenopsis_yellow_2-1674257802005.jpg?v=1674257802",
      name: "Orchid",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/2_palm_parlor_2-1674008633570.jpg?v=1674008726",
      name: "Palm",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/10_spathiphyllum_green_2-1674509113645.jpg?v=1674509118",
      name: "Peace Lily",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_peperomia_ginny_2-1674008633865.jpg?v=1674008776",
      name: "Peperomia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_philodendron_cordatum_2-1674008633876.jpg?v=1674008779",
      name: "Philodendron",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/0b1b4ebf-b941-415c-a357-00ad285bcb5d_379x379_de3f2428-c1d8-405b-bcf0-c307ca2ae0aa.webp?v=1698943465",
      name: "Pine",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_pilea_peperomiodes_2-1-1674008633885.jpg?v=1674008783",
      name: "Pilea",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/599.jpg?v=1698951627",
      name: "Poinsettia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_pothos_golden_2-1660957966258.jpg?v=1660957982",
      name: "Pothos",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/758.jpg?v=1699001558",
      name: "Rhaphidophora",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_schefflera_arboricola_2-1674008633956.jpg?v=1674008794",
      name: "Schefflera",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/files/701.png?v=1699008420",
      name: "Scindapsus",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/seed_banner-1674008634443.png?v=1674008719",
      name: "Seeds",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_snake_laurentii_2-1674008634292.jpg?v=1674008695",
      name: "Snake Plant",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_spider_reverse_2-1674008633966.jpg?v=1674008797",
      name: "Spider Plant",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_stromanthe_sanguinea_2-1674008634330.jpg?v=1674008702",
      name: "Stromanthe",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_succ_aeonium_kiwi_2-1673473660259.jpg?v=1673473676",
      name: "Succulent",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/6_syngonium_whitebutterfly_2-1674008634361.jpg?v=1674008706",
      name: "Syngonium",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/4_tradescantia_sitarasgold_2-1674008634001.jpg?v=1674008644",
      name: "Tradescantia",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/2528/3612/t/11/assets/pf-eafe89be--1ZamioculcasZamiifolia4-DETAIL.jpg?v=1611974236",
      name: "Zamioculcas Zamiifolia 'ZZ'",
    },
  ];

  return (
    <>
      <PlantCareCss>
        <Container>
          <div className="header">
            <h1>Plant Care Guides</h1>
            <p>
              Access our digital care guide booklet here. It includes
              species-specific care info with lots of great plant tips!
            </p>
            <a href="https://drive.google.com/file/d/1TZsCFzGogY154kv6FDsxbBthwkkEwWoA/view">
              <button className="to-pdf">Care Guide PDF</button>
            </a>
          </div>

          <div className="content">
            {plant_care.map((item: any) => {
              return (
                <a href="/care/1">
                  <div className="content-item">
                    <img src={item.image} alt="" />

                    <div className="item">{item.name}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </Container>
      </PlantCareCss>
    </>
  );
};

export default PlantCare;
