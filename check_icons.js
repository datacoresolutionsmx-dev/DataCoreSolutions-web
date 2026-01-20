import * as icons from 'lucide-react';
const requiredIcons = ['Users', 'Target', 'Heart', 'Award', 'Briefcase', 'MessageCircle'];
requiredIcons.forEach(icon => {
    console.log(`${icon}: ${icon in icons ? 'Found' : 'Missing'}`);
});
