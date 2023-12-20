# Dogpedia
### Demo Site : https://dogpedia-nine.vercel.app/
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
- Tailwind CSS
- Vercel
- Python
- Jupyter Notebook
- AWS

## Developers

- [Mansij Mishra](https://github.com/MansijMishra)

    - Pre processed and trained the Inception-v3 model
    - Developed an API for sending model responses from image input
    - Hosted the model API.
    - Collaborated on Report

- [Johan Delao](https://github.com/JohanDelao)

    - Developed the web application using NextJS, React, and TailwindCSS.
    - Connected the APIs (both conventionally named Dog API) Dog API and Dog API as well as the model response API.
    - Collaborated on Report

- [Henry Suarez](https://github.com/Henrysua12)
  
  - Attempted EfficentNet Model Approach.
  - Attempted VGG16 Model Approach.
  - Attempted Data Augmentation on Single Model.
  - Created Accuracy Test Script.
  - Collaborated on Report.


### Local application run

To run the app locally, follow the instructions in the app/web-app folder
