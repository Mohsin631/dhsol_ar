// components/StickyContactBar.js
import { Mail, Phone, FileText } from 'lucide-react';
import Link from 'next/link';

export default function StickyContactBar() {
  return (
    <div className="sticky-contact-bar">
      <a href="mailto:sales@dhsol.net" className="icon-button" aria-label="Email">
        <Mail size={20} />
      </a>
      <a href="tel:+18886105270" className="icon-button" aria-label="Phone">
        <Phone size={20} />
      </a>
      <Link href="/contact" className="icon-button" aria-label="Contact Page">
        <FileText size={20} />
      </Link>
    </div>
  );
}
