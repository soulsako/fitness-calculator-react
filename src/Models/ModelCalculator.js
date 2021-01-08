class ModelCalculator {

  constructor(goal, gender, measure, age, height, weight, level){
    this.goal = goal;
    this.gender = gender;
    this.measure = measure;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.level = level;
  }

  static getInstance(){
    return new ModelCalculator(
      'lose_fat',
      'male',
      'metric',
      25,
      175,
      100,
      'sedentary'
    );
  }
}

export default ModelCalculator;