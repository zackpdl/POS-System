# POS-System

A sleek and responsive Point of Sale (POS) system built with React, TypeScript, and Tailwind CSS. Perfect for cafes, bakeries, and small retail businesses.

![Modern POS Screenshot](https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&h=600)

## Features

- 🛍️ Intuitive product grid with beautiful imagery
- 🛒 Real-time cart management
- ➕ Quick quantity adjustments
- 💰 Automatic total calculation
- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface
- 🔍 Type-safe with TypeScript
- 🎯 Component-based architecture

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons
- Vite

## Getting Started

1. Clone the repository
```bash
git clone <https://github.com/zackpdl/POS-System.git>
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Cart.tsx      # Shopping cart component
│   └── ProductGrid.tsx# Product display grid
├── data/             # Static data and mock services
│   └── products.ts   # Product catalog
├── types/            # TypeScript interfaces
│   └── index.ts      # Shared type definitions
└── App.tsx           # Main application component
```

## Usage

- Click on products to add them to the cart
- Adjust quantities using the + and - buttons
- Remove items using the trash icon
- Click checkout to complete the order

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Product images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)

## [Live Preview] (https://lively-moonbeam-e3d8e6.netlify.app/)
