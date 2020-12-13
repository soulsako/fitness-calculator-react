export const arrInitialData = [
  {
    id: 'lose_fat',
    strTitle: 'Lose Fat',
    nodeIcon: "faWeight",
    strSubtitle: 'Get leaner and increase your stamina',
    intValue: -15,
    bIsSelected: false,
    arrOpponents: ['get_muscle', 'maintain_weight']
  },
  {
    id: 'get_muscle',
    strTitle: 'Get Muscle',
    nodeIcon: "faDumbbell",
    strSubtitle: 'Build muscle strength',
    intValue: 15,
    bIsSelected: false,
    arrOpponents: ['lose_fat', 'maintain_weight']
  },
  {
    id: 'maintain_weight',
    strTitle: 'Maintain Weight',
    nodeIcon: "faUtensils",
    strSubtitle: 'Eat and train for optimum health',
    intValue: 0,
    arrOpponents: ['get_muscle', 'lose_fat'],
    bIsSelected: false,
  },
  {
    id: 'male',
    strTitle: 'Male',
    nodeIcon: "faMale",
    weight: 10,
    height: 6.25,
    age: 5,
    arrOpponents: ['female'],
    bIsSelected: false,
  },
  {
    id: 'female',
    strTitle: 'Female',
    nodeIcon: "faFemale",
    weight: 10,
    height: 6.25,
    age: 5,
    arrOpponents: ['male'],
    bIsSelected: false,
  },
  {
    id: 'metric',
    strTitle: 'Metric',
    arrOpponents: ['imperial'],
    bIsSelected: false,
  },
  {
    id: 'imperial',
    strTitle: 'Imperial',
    arrOpponents: ['metric'],
    bIsSelected: false,
  },
  {
    id: 'age',
    strLabel: 'Age',
    intValue: 0,
    min: 0,
    max: 100
  },
  {
    id: 'height',
    strLabel: 'Height',
    intValue: 0,
    min: 0,
    max: 320
  },
  {
    id: 'weight',
    strLabel: 'Weight',
    intValue: 0,
    min: 0,
    max: 250
  },
  {
    id: 'sedentary',
    strTitle: 'Sedentary',
    strSubtitle: 'Little or no exercise',
    bIsSelected: false,
    arrOpponents: ['lightly_active', 'moderately_active', 'very_active']
  },
  {
    id: 'lightly_active',
    strTitle: 'Lightly Active',
    strSubtitle: 'Little exercise or sports 1-3 days/week',
    bIsSelected: false,
    arrOpponents: ['sedentary', 'moderately_active', 'very_active']
  },
  {
    id: 'moderately_active',
    strTitle: 'Moderately Active',
    strSubtitle: 'Moderate exercise or sports 3-5 days/week',
    bIsSelected: false,
    arrOpponents: ['lightly_active', 'sedentary', 'very_active']
  },
  {
    id: 'very_active',
    strTitle: 'Very Active',
    strSubtitle: 'Hard excercise or sports 6-7 days a week',
    bIsSelected: false,
    arrOpponents: ['lightly_active', 'moderately_active', 'sedentary']
  }
];