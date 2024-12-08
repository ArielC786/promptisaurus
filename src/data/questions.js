export const promptQuestions = [
  {
    id: 'visual',
    label: 'Visual Type',
    question: 'What type of visual are you creating?',
    options: ['Photograph', 'Digital Art', 'Mixed Media', 'Illustration'],
    placeholder: 'e.g., Professional Photograph',
    suggestions: [
      'Professional Photograph',
      'Digital Concept Art',
      'Watercolor Illustration',
      '3D Render',
      'Oil Painting Style'
    ]
  },
  {
    id: 'camera',
    label: 'Camera/Equipment',
    question: 'What camera or equipment will be used?',
    placeholder: 'e.g., Sony A7RV with 16-35mm lens',
    suggestions: [
      'Canon EOS R5 with 24-70mm lens',
      'Sony A7RV with 16-35mm lens',
      'Nikon Z9 with 70-200mm',
      'Hasselblad X2D 100C',
      'iPhone 15 Pro Max'
    ]
  },
  {
    id: 'subject',
    label: 'Subject',
    question: 'What is the main subject of your visual?',
    placeholder: 'e.g., A vintage car in an urban setting',
    suggestions: [
      'A vintage Porsche 911',
      'A fashion model in haute couture',
      'A modern minimalist building',
      'A wild tiger in motion',
      'An abstract geometric pattern'
    ]
  },
  {
    id: 'scene',
    label: 'Scene Description',
    question: 'Describe the overall scene and setting',
    placeholder: 'e.g., Sunset in downtown Chicago',
    suggestions: [
      'Misty morning in a pine forest',
      'Busy street in Tokyo at night',
      'Sunset at a Mediterranean beach',
      'Industrial warehouse district',
      'Minimalist white studio setup'
    ]
  },
  {
    id: 'lighting',
    label: 'Lighting',
    question: 'Describe the lighting conditions',
    placeholder: 'e.g., Golden hour natural lighting',
    suggestions: [
      'Soft diffused natural light',
      'Dramatic studio lighting with rim light',
      'Moody low-key lighting',
      'Bright and airy high-key setup',
      'Cinematic blue hour lighting'
    ]
  },
  {
    id: 'framing',
    label: 'Framing/Composition',
    question: 'How should the subject be framed?',
    placeholder: 'e.g., Wide angle, low perspective',
    suggestions: [
      'Rule of thirds with centered subject',
      'Dynamic diagonal composition',
      'Symmetrical framing',
      'Wide angle with dramatic perspective',
      'Intimate close-up shot'
    ]
  },
  {
    id: 'refinement',
    label: 'Refinements',
    question: 'Any additional styling or quality specifications?',
    placeholder: 'e.g., Sharp details, high contrast, cinematic look',
    suggestions: [
      'Sharp details with high contrast',
      'Soft and dreamy aesthetic',
      'Film-like grain and color grading',
      'Hyper-realistic HDR look',
      'Vintage color palette'
    ]
  }
]; 