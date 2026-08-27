import type { SolutionPath } from "@/types/ecosystem";

export const solutionPaths: SolutionPath[] = [
  {
    id: "enerji-izleme-seviye-1",
    name: "Seviye 1 – Yerel Ölçüm",
    description:
      "Elektriksel büyüklüklerin sahada yerel olarak ölçülmesini temsil eden temel çözüm yapısı.",
    steps: [
      {
        order: 1,
        productId: "akim-trafosu",
      },
      {
        order: 2,
        productId: "mpr",
      },
    ],
  },

  {
    id: "enerji-izleme-seviye-2",
    name: "Seviye 2 – Bağlantılı Ölçüm",
    description:
      "Yerel ölçüm sisteminin uygun haberleşme altyapısı ile genişletilmiş halini temsil eder.",
    steps: [
      {
        order: 1,
        productId: "akim-trafosu",
      },
      {
        order: 2,
        productId: "mpr",
      },
      {
        order: 3,
        productId: "gateway",
      },
    ],
  },

  {
    id: "enerji-izleme-seviye-3",
    name: "Seviye 3 – Uzaktan İzleme",
    description:
      "Saha verilerinin merkezi bir izleme çözümüne aktarılmasını temsil eder.",
    steps: [
      {
        order: 1,
        productId: "akim-trafosu",
      },
      {
        order: 2,
        productId: "mpr",
      },
      {
        order: 3,
        productId: "gateway",
      },
      {
        order: 4,
        productId: "entes-net",
      },
    ],
  },

  {
    id: "enerji-izleme-seviye-4",
    name: "Seviye 4 – Enerji Yönetimi",
    description:
      "Ölçüm ve izleme altyapısının enerji yönetimi süreçlerine doğru genişletilmesini temsil eder.",
    steps: [
      {
        order: 1,
        productId: "akim-trafosu",
      },
      {
        order: 2,
        productId: "mpr",
      },
      {
        order: 3,
        productId: "gateway",
      },
      {
        order: 4,
        productId: "entes-net",
      },
      {
        order: 5,
        productId: "enerji-yonetimi",
      },
    ],
  },
];