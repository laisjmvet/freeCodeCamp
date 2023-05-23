class Hat:

  def __init__(self, **balls):
    self.data = balls.copy()
    self.originalBalls = []
    self.contents = []

    #create a list with the balls
    for key, value in self.data.items():
      for i in range(value):
        self.contents.append(key)
    self.originalBalls = self.contents.copy()
    
  #remove a ball from the hat
  def draw(self, number):
    self.restartHat()
    sequence = []

    #return all balss if the number of balls to be drawn are higher than the number of balls in the hat
    if number > len(self.contents):
      return self.contents
    
    #randomly remove a ball from the hat and add it to a list
    for i in range(number):
      color = random.choice(self.contents)
      self.contents.remove(color)
      sequence.append(color)
    
    return sequence

  #restart the balls for a new experiment
  def restartHat(self):
    self.contents = self.originalBalls.copy()

#see if the balls expected to be removed were removed from the hat
def validation(expec, data):
  val = True

  for i in expec:    
    if i not in data or data.count(i) < expec.count(i):
      
      val = False
      break
    
  return val    

#receive the object, the sequence expected, the number of balls to be drwan and the num of experiments to be realized
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
 
  expec = []
  #create a list with the expected balls
  for key, value in expected_balls.items():
    for i in range(value):
      expec.append(key)

  count = 0
  #see if the balls expected were removed from the hat and iterates a counter
  for j in range(num_experiments):
    data = hat.draw(num_balls_drawn)
    val = validation(expec, data)
    
    if val:
      for i in range(len(expec)):       
        data.pop(data.index(expec[i]))
     
      count+= 1
      
       
  probability = count / num_experiments  
  return probability


prob_calculator.random.seed(95)
hat = prob_calculator.Hat(blue=4, red=2, green=6)

probability = prob_calculator.experiment(
    hat=hat,
    expected_balls={"blue": 2,
                    "red": 1},
    num_balls_drawn=4,
    num_experiments=3000)
print("Probability:", probability)

print(hat.draw(10))
