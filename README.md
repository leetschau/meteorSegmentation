This package is for Chinese segmentation.

Upload your vocabulary dictionary into a mongoDB,
then run segmentation based on this vocabulary.

For example, if your segmentation dictionary contains "牛奶" and "面包",
now input "牛奶和面包",
you get a list: "牛奶", "和" and "面包".

See demo application [segmentationDemo](https://github.com/leetschau/segmentationDemo) for details.

# Install

In your Meteor application directory, run:

    meteor add leechau:segmentation
