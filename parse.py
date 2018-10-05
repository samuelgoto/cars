import scipy.io
import json

mat = scipy.io.loadmat("devkit/cars_meta.mat")
classes = mat["class_names"][0]
size = classes.size
#for i in range(0, size - 1):
#	print(classes[i][0])

images = scipy.io.loadmat("devkit/cars_train_annos.mat")
annotations = images["annotations"][0]

dataset = {
}

for annotation in annotations:
    # print annotation
    clazz = annotation[4][0][0]
    filename = annotation[5][0]
    # dataset[clazz]
    if (clazz in dataset):
        dataset[clazz].append(filename)
    else:
        dataset[clazz] = [filename]

# print(dataset[1])

for i in dataset.keys():
    name = classes[i - 1][0]
    images = len(dataset[i])
    with open("images/" + str(i - 1) + ".jsonld", "w") as f:
        data = {
            "@context": "https://code.sgo.to/datasets",
            "@id": str(i),
            "name": str(name),
            "images": dataset[i]
        }
        # json[] = 
        # f.write(name + "\n")
        # f.write(str(images) + "\n")
        f.write(json.dumps(data, indent = 2, sort_keys = False))


# print(dataset)

