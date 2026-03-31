import { T } from "../theme/tokens.js";

export const SCENES = [
  {
    id: "souk",
    label: "Cairo Souk",
    color: T.amber,
    summary: "Covered spice market — saffron, leather, sun-heated stone",
    notes: {
      top: ["Saffron Thread", "Cardamom", "Fresh Mint"],
      heart: ["Tanned Leather", "Shisha Coal", "Cumin Dust"],
      base: ["Sandalwood", "Heated Limestone", "Aged Copper"],
    },
    metrics: { intensity: 0.92, valence: 0.55, familiarity: 0.38, confidence: 0.81 },
    emotional: "Sensory Immersion",
    env: { temp: "38°C", enclosure: "semi-enclosed", airflow: "cross-breeze" },
  },
  {
    id: "forest",
    label: "Ancient Forest",
    color: T.teal,
    summary: "Pre-dawn canopy — moss carpet, cedar bark, petrichor",
    notes: {
      top: ["Petrichor", "Morning Dew"],
      heart: ["Cedar Heartwood", "Fern Frond", "Mushroom Spore"],
      base: ["Wet Earth", "Decomposing Leaf", "Root System"],
    },
    metrics: { intensity: 0.76, valence: 0.88, familiarity: 0.7, confidence: 0.88 },
    emotional: "Primordial Calm",
    env: { temp: "14°C", enclosure: "open", airflow: "still" },
  },
  {
    id: "lab",
    label: "Chemistry Lab",
    color: T.rose,
    summary: "Research facility — reagent vapor, latex, heated glass",
    notes: {
      top: ["Ethanol Vapor", "Hydrochloric Trace"],
      heart: ["Latex Glove", "Distilled Water"],
      base: ["Epoxy Resin", "Heated Borosilicate", "Marker Ink"],
    },
    metrics: { intensity: 0.6, valence: -0.22, familiarity: 0.52, confidence: 0.76 },
    emotional: "Focused Precision",
    env: { temp: "21°C", enclosure: "enclosed", airflow: "fume-hooded" },
  },
];
