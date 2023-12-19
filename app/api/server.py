from flask import Flask, request, jsonify
import cv2
import tempfile
from tensorflow.keras.models import load_model

# Flask app setup
server = Flask(__name__)

# Load your dog model (replace 'your_model_path' with the actual path to your model file)
dog_model = load_model('dogbreedrecognition.h5')

# Define the categories for dog breeds (replace 'your_categories' with your actual categories)
dog_categories = [['Australian_terrier',
 'toy_poodle',
 'Great_Pyrenees',
 'Maltese_dog',
 'Norwich_terrier',
 'whippet',
 'Boston_bull',
 'Irish_setter',
 'Rottweiler',
 'kelpie',
 'schipperke',
 'Leonberg',
 'Welsh springer spaniel',
 'Pomeranian',
 'Pekinese',
 'Irish_wolfhound',
 'Blenheim spaniel',
 'basenji',
 'African hunting dog',
 'komondor',
 'Yorkshire terrier',
 'basset',
 'Japanese spaniel',
 'standard schnauzer',
 'dhole',
 'miniature pinscher',
 'Lhasa',
 'Walker hound',
 'Kerry blue terrier',
 'standard poodle',
 'Saint Bernard',
 'Chihuahua',
 'Afghan_hound',
 'Newfoundland',
 'black-and-tan coonhound',
 'pug',
 'Scottish deerhound',
 'cairn',
 'malamute',
 'beagle',
 'vizsla',
 'collie',
 'Italian greyhound',
 'West Highland white terrier',
 'Brittany spaniel',
 'English springer',
 'affenpinscher',
 'Doberman',
 'silky terrier',
 'Pembroke',
 'Weimaraner',
 'papillon',
 'Norwegian elkhound',
 'Sussex_spaniel',
 'soft-coated wheaten terrier',
 'Shih-Tzu',
 'Ibizan hound',
 'cocker spaniel',
 'flat-coated retriever',
 'American Staffordshire terrier',
 'Rhodesian ridgeback',
 'Samoyed',
 'Brabancon griffon',
 'groenendael',
 'Shetland sheepdog',
 'Bouvier des Flandres',
 'Lakeland terrier',
 'Saluki',
 'miniature poodle',
 'Tibetan terrier',
 'Eskimo dog',
 'golden retriever',
 'Staffordshire bullterrier',
 'giant schnauzer',
 'Bedlington terrier',
 'miniature schnauzer',
 'Border collie',
 'Appenzeller',
 'borzoi',
 'Border terrier',
 'Siberian_husky',
 'chow',
 'curly-coated retriever',
 'Airedale',
 'dingo',
 'otterhound',
 'keeshond',
 'French_bulldog',
 'toy terrier',
 'Sealyham terrier',
 'Labrador retriever',
 'Bernese mountain dog',
 'German shepherd',
 'briard',
 'Chesapeake Bay retriever',
 'kuvasz',
 'malinois',
 'Great_Dane',
 'Norfolk terrier',
 'wire-haired_fox terrier',
 'Dandie Dinmont',
 'bull mastiff',
 'EntleBucher',
 'Scotch terrier',
 'clumber',
 'boxer',
 'Cardigan',
 'Tibetan mastiff',
 'bloodhound',
 'Irish water spaniel',
 'Old English sheepdog',
 'bluetick',
 'Irish terrier',
 'Mexican hairless',
 'English setter',
 'redbone',
 'Gordon setter',
 'English foxhound',
 'German short-haired_pointer',
 'Greater Swiss Mountain dog']]

# Function to prepare the image
def prepare_specificmodel(filepath):
    IMG_SIZE = 299
    img_array = cv2.imread(filepath)[...,::-1]
    new_array = cv2.resize(img_array, (IMG_SIZE, IMG_SIZE))
    return new_array.reshape(-1, IMG_SIZE, IMG_SIZE, 3)

# Model recognition function
def identify_dog(image_path):
    prediction = dog_model.predict([prepare_specificmodel(image_path)])
    prediction_list = list(prediction[0])
    max_index = prediction_list.index(max(prediction_list))
    return dog_categories[0][max_index], max(prediction_list)


# Function to check if the file extension is allowed
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Endpoint to predict dog breed
@server.route('/predict_breed', methods=['GET', 'POST'])
def predict_breed():
    if request.method == "POST":
        uploaded_file = request.files["file"]
        path = uploaded_file.name   
        print(path)
        
        if not allowed_file(uploaded_file.filename):
            return "FILE NOT ALLOWED!"
        
        with tempfile.TemporaryDirectory() as temp_dir:
            # Save the uploaded file to the temporary directory
            file_path = temp_dir + "/" + uploaded_file.filename
            uploaded_file.save(file_path)

            # Get the prediction
            breed, confidence = identify_dog(file_path)

            # Return JSON response
            return jsonify({
                "Breed": f'{breed}',
                "Confidence": f'{confidence}'
            })

    if request.method == "GET":
        return jsonify({
            "Message": "Success"
        })

if __name__ == '__main__':
    server.run(debug=True, port=8001)
