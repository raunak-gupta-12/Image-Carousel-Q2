
## Introduction

This project is a simple yet flexible image carousel component built using React, HTML, CSS, and JavaScript. It allows you to display a series of images in a sliding format, with navigation controls and fallback image handling in case an image fails to load.

## Features

- **Horizontal Sliding:** Displays images in a horizontal sliding format.
- **Navigation Controls:** Includes next and previous buttons for cycling through images.
- **Indicators:** Provides indicators (dots) to show the current image and allow direct navigation.
- **Fallback Image:** Implements a fallback image that displays when an image fails to load.
- **Responsive Design:** Fully responsive and adapts to various screen sizes.
- **Smooth Transitions:** Includes smooth animations for a visually pleasing experience.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **HTML5**: Markup language for structuring the content.
- **CSS3**: Styling for the component, ensuring a modern and responsive design.
- **JavaScript**: Logic for handling the carousel's functionality.
- **React Icons**: Provides the navigation icons for the carousel.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- npm or yarn as your package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/raunak-gupta-12/Image-Carousel-Q2.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Image-Carousel-Q2
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the carousel in action.

## Usage

### Adding Images

To add your own images to the carousel, modify the `CarouselData.json` file located in the `src/data/` directory. Replace the URLs in the `slides` array with your image URLs:

```json
{
  "slides": [
    {
      "src": "https://your-image-url.com/image1.jpg",
      "alt": "Image description 1"
    },
    {
      "src": "https://your-image-url.com/image2.jpg",
      "alt": "Image description 2"
    }
  ]
}
```

### Customizing Fallback Image

You can customize the fallback image by updating the `fallbackImage` URL in the `App.jsx` file:

```javascript
const fallbackImage = "https://via.placeholder.com/600x400?text=Image+Not+Available";
```



