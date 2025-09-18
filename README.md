# Laravel Book Selling Platform

A robust and secure book selling platform built with Laravel, featuring role-based access control, media management, and a modern user interface using Inertia.js.

## Features

### Role-Based Access Control
- **Admin:** Full platform management capabilities
- **Seller:** Book management and sales tracking

### Core Functionalities

#### For Administrators
- User management system
- Category management
- Seller approval workflow
- Book approval system
- Platform monitoring

#### For Sellers
- Book upload and management
- Inventory tracking
- Sales monitoring
- Profile management

### Technical Stack

- **Backend Framework:** Laravel
- **Frontend:** Inertia.js with TypeScript
- **Database:** SQLite (Configurable)
- **Media Management:** Spatie Media Library
- **Authentication:** Laravel Built-in Auth
- **Authorization:** Spatie Permission

## Requirements

- PHP >= 8.1
- Node.js >= 16.x
- Composer
- SQLite/MySQL/PostgreSQL

## Installation

1. **Clone the repository**
```bash
git clone https://github.com/hafizn24/laravel-books-selling-platform.git
cd laravel-books-selling-platform
```

2. **Install PHP dependencies**
```bash
composer install
```

3. **Install Node.js dependencies**
```bash
npm install
```

4. **Environment Setup**
```bash
cp .env.example .env
php artisan key:generate
```

5. **Database Setup**
```bash
php artisan migrate
php artisan db:seed
```

6. **Storage Setup**
```bash
php artisan storage:link
```

7. **Build Assets**
```bash
npm run build
```

## Project Structure

```
bsp/
├── app/                    # Application core
│   ├── Http/              # Controllers, Middleware, Requests
│   ├── Models/            # Eloquent models
│   └── Providers/         # Service providers
├── config/                # Configuration files
├── database/              # Migrations, factories, and seeders
├── public/                # Publicly accessible files
├── resources/             # Frontend assets and views
│   ├── css/
│   ├── js/
│   └── views/
├── routes/                # Application routes
└── storage/              # Application storage
```

## Database Schema

### Main Tables
- `users` - User information
- `books` - Book details
- `categories` - Book categories
- `media` - Media files (book covers)
- `roles` and `permissions` - Access control

## Security Features

- CSRF Protection
- XSS Prevention
- SQL Injection Protection
- Role-based Access Control
- Form Validation
- Secure Password Hashing

## Development

### Starting Development Server
```bash
# Terminal 1: Laravel Server
php artisan serve

# Terminal 2: Vite Development Server
npm run dev
```

### Running Tests
```bash
php artisan test
```

### Code Style
This project follows PSR-12 coding standards. To check your code:
```bash
./vendor/bin/pint
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Laravel](https://laravel.com)
- [Inertia.js](https://inertiajs.com)
- [Spatie Media Library](https://spatie.be/docs/laravel-medialibrary)
- [Spatie Permission](https://spatie.be/docs/laravel-permission)

## Support

For support, please email [contact@example.com](mailto:contact@example.com) or open an issue in the GitHub repository.

## Roadmap

Future planned features and improvements:

- [ ] Wishlist functionality
- [ ] Payment gateway integration
- [ ] Advanced search with filters
- [ ] Sales analytics dashboard
- [ ] Email notification system
- [ ] Two-factor authentication
- [ ] API documentation
- [ ] Performance optimization
- [ ] Mobile application
