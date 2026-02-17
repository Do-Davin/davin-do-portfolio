import Container from './Container';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/5 mt-32">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <p className="text-sm text-gray-400">
            Built and designed by <span className="text-(--color-primary)">DO DAVIN</span>.
          </p>

          <p className="text-sm text-gray-500">
            All rights reserved. &copy; {new Date().getFullYear()}
          </p>
        </div>
      </Container>
    </footer>
  );
}
