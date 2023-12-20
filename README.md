# Dogpedia

## About

Dogpedia is a React.js web application that allows users to submit a photo of a dog. The application uses a Convolutional Neural Network (CNN) Inception-v3, customized through the Python Keras API, to identify the breed of the dog in the submitted photo. Subsequently, an API is called to gather important facts about that particular breed, which are then displayed to the user.

![Prototype Image](images/Dogpedia_prototype.png)

## Model Approach

- Convolution Neural Network: Inception-v3 customized through the Python Keras API.
- Transfer Learning: Weighted with the ImageNet dataset to leverage pre-trained features.
- Training Dataset: Trained with the [Stanford Dogs Dataset](http://vision.stanford.edu/aditya86/ImageNetDogs/).

## Breed Information

Information about a breed's health and characteristics are provided using the [Dog API](https://dogapi.dog/) by [kinduff](https://kinduff.com/).
https://kinduff.com/
## Technology Used

- Tensorflow
- Keras
- React.js
- Python
- Jupyter Notebook

## Developers

- [Mansij Mishra](https://github.com/MansijMishra)
- [Johan Delao](https://github.com/JohanDelao)
- [Henry Suarez](https://github.com/Henrysua12)
  
  -Attempted EfficentNet Model Approach.
  -Attempted VGG16 Model Approach.
  -Attempted Data Augmentation on Single Model.
  -Created Accuracy Test Script.
  -Collaborated on Report.



