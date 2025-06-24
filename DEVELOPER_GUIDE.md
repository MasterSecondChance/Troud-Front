# 👨‍💻 Trode Developer Guide

Esta guía contiene información técnica detallada para desarrolladores que trabajen en el proyecto Trode.

## 🔧 Configuración de Entorno

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:3000/api
REACT_APP_ENVIRONMENT=development

# Firebase Configuration (if using)
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
```

### Versiones Específicas

```json
{
  "node": "20.19.2",
  "npm": "10.9.2",
  "react": "18.3.1",
  "webpack": "5.99.9"
}
```

## 🏗️ Arquitectura del Proyecto

### Estructura de Componentes

```
src/components/
├── Card/              # Tarjetas de ropa
├── Header/            # Navegación principal
├── HeaderLight/       # Navegación simple
├── FullCard/          # Vista detallada de ropa
├── MyClothes/         # Gestión de ropa del usuario
├── ProfilePersonal/   # Perfil del usuario
├── Sign/              # Componentes de autenticación
├── UploadClothes/     # Subida de ropa
└── ...
```

### Gestión de Estado

- **SessionStorage**: Datos del usuario autenticado
- **React State**: Estado local de componentes
- **Context API**: Compartir datos entre componentes

### Routing (React Router v6)

```javascript
// Sintaxis moderna
<Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/details/:id" element={<Details />} />
  <Route path="*" element={<NotFound />} />
</Routes>

// Navegación
const navigate = useNavigate();
navigate('/home');
```

## 🛠️ Herramientas de Desarrollo

### ESLint

Configuración estricta para calidad de código:

```bash
npm run eslint          # Ejecutar linting
npm run eslint --fix    # Corregir automáticamente
```

### Prettier

Formateo automático de código:

```bash
npm run format          # Formatear código
```

### Webpack 5

Configuración moderna con:
- Asset modules para imágenes
- Hot Module Replacement
- Code splitting
- Tree shaking

## 🧪 Testing

### Configuración Jest

```javascript
// jest.config.js
{
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/src/__test__/setupTest.js"],
  "moduleNameMapper": {
    "\\.(css|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
  }
}
```

### Comandos de Testing

```bash
npm test                    # Ejecutar tests
npm run test:watch         # Modo watch
npm run test:coverage      # Cobertura de código
npm run test:update        # Actualizar snapshots
```

## 🎨 Estilos y Diseño

### Sass/SCSS

```scss
// Variables globales
@import 'assets/styles/containers/Variables.scss';

// Mixins comunes
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Responsive Design

```scss
// Breakpoints
$mobile: 768px;
$tablet: 1024px;
$desktop: 1200px;

@media (max-width: $mobile) {
  // Estilos móviles
}
```

## 📡 Integración con APIs

### Axios Configuration

```javascript
// api/index.js
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
});

// Interceptors para manejo de errores
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);
```

### Manejo de Autenticación

```javascript
// Guardar datos del usuario
sessionStorage.setItem('userData', JSON.stringify(userData));

// Obtener datos del usuario
const userData = JSON.parse(sessionStorage.getItem('userData'));

// Logout
sessionStorage.clear();
navigate('/');
```

## 🔍 Debugging

### React DevTools

1. Instalar extensión React DevTools
2. Inspeccionar componentes en tiempo real
3. Analizar hooks y estado

### Webpack Dev Server

- Hot reloading automático
- Source maps habilitados
- Overlay de errores en el navegador

### Console Logging

```javascript
// Development only
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}
```

## 📦 Build y Deployment

### Build de Producción

```bash
npm run build           # Build completo
npm run build:quiet     # Build sin verbose
```

### Análisis del Bundle

```bash
# Instalar webpack-bundle-analyzer
npm install --save-dev webpack-bundle-analyzer

# Analizar bundle
npx webpack-bundle-analyzer dist/bundle.js
```

### Deployment Checklist

- [ ] Build sin errores
- [ ] Tests pasando
- [ ] Linter sin errores
- [ ] Variables de entorno configuradas
- [ ] Assets optimizados
- [ ] Source maps deshabilitados en producción

## 🔒 Seguridad

### Buenas Prácticas

1. **No exponer API keys** en el código
2. **Validar datos** en el frontend y backend
3. **Sanitizar inputs** del usuario
4. **Usar HTTPS** en producción
5. **Implementar CSP** headers

### Ejemplo de Validación

```javascript
// Validar email
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Sanitizar input
const sanitizeInput = (input) => {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};
```

## 🚀 Performance

### Optimizaciones Implementadas

1. **Code Splitting**: Rutas lazy loading
2. **Tree Shaking**: Eliminación de código no usado
3. **Image Optimization**: Webpack asset modules
4. **Bundle Optimization**: Minimización automática

### Métricas de Performance

```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse http://localhost:8080 --view

# Bundle size analysis
npm run build
ls -la dist/
```

## 🔄 Git Workflow

### Branching Strategy

```bash
main                    # Producción
├── develop            # Desarrollo
├── feature/new-feature    # Nuevas características
├── fix/bug-fix           # Correcciones
└── hotfix/urgent-fix     # Correcciones urgentes
```

### Commit Messages

```bash
feat: add new clothing upload feature
fix: resolve navigation bug in mobile
docs: update API documentation
style: improve responsive design
refactor: modernize React components
test: add unit tests for auth components
```

## 📊 Monitoreo y Analytics

### Error Tracking

```javascript
// Error boundary para capturar errores
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Enviar a servicio de error tracking
  }
}
```

### Performance Monitoring

```javascript
// Performance API
const navigation = performance.getEntriesByType('navigation')[0];
console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
```

## 🆘 Resolución de Problemas Comunes

### Puerto 8080 Ocupado

```bash
# Encontrar proceso usando puerto 8080
lsof -ti:8080

# Terminar proceso
kill -9 $(lsof -ti:8080)
```

### Problemas de Dependencias

```bash
# Limpiar caché
npm cache clean --force
rm -rf node_modules package-lock.json

# Reinstalar con flags de compatibilidad
npm install --legacy-peer-deps
```

### Errores de Build

```bash
# Verificar versiones de Node
node --version  # Debe ser 20.19.2
npm --version   # Debe ser 10.9.2

# Limpiar dist
rm -rf dist
npm run build
```

## 🔗 Recursos Útiles

- [React 18 Documentation](https://react.dev/)
- [Webpack 5 Guide](https://webpack.js.org/)
- [React Router v6](https://reactrouter.com/)
- [Jest Testing Framework](https://jestjs.io/)
- [Sass Documentation](https://sass-lang.com/)

---

**Mantenido por el equipo de desarrollo de Trode** 