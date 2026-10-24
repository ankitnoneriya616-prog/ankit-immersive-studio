import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "node_modules/@designcodeio/threeui/lib-dist/assets/landing-pages");
const destination = resolve(root, "public/landing-pages");
const pagePath = resolve(destination, "kage.html");

await mkdir(destination, { recursive: true });
await cp(resolve(source, "kage.html"), pagePath);
await cp(resolve(source, "secret-pathways-assets"), resolve(destination, "secret-pathways-assets"), { recursive: true });

let html = await readFile(pagePath, "utf8");

// Keep the original cinematic 3D experience and its asset paths, but make the
// visible story describe Ankit's real creative services instead of the Kyoto demo.
const replacements = [
  ["Kage — Where stillness reveals the unseen", "Ankit Noneriya — AI & Digital Creative Specialist"],
  ["影の道", "ANKIT NONERIYA"],
  ["Temples伽藍", "Websites"],
  ["Gardens庭園", "Editing"],
  ["Rituals神事", "AI Lab"],
  ["Afterlight残光", "Contact"],
  ["Sanmon — before the bell", "Creative studio — built around your vision"],
  ["The maples let go all through the walk.", "Ideas become experiences when design meets technology."],
  ["MOONWATER", "AI CREATIVITY"],
  ["LANTERN", "VIDEO EDITING"],
  ["Wisps", "MOTION"],
  ["LIGHT", "WEB DESIGN"],
  ["KAGE — Hidden Realms of Kyoto", "ANKIT NONERIYA — Immersive Creative Studio"],
  ["Where stillness reveals the unseen.", "Ideas brought to life through design, motion and AI."],
  ["WHERE STILLNESS REVEALS THE UNSEEN", "IDEAS INTO DIGITAL EXPERIENCES"],
  ["HIDDEN REALMS OF KYOTO", "AI & DIGITAL CREATIVE SPECIALIST"],
  ["Enter Kyoto through its quiet thresholds, where ritual, craft, and memory shape the path.", "I create premium websites, cinematic edits and AI-powered content for brands and creators."],
  ["Chapter 00 — The Hidden Gate", "Chapter 00 — Enter the Studio"],
  ["Scroll to enter", "Scroll to explore"],
  ["01 Thresholds", "01 Web Development"],
  ["Discover the hidden gates that open on to deeper paths.", "Premium, responsive websites designed to turn visitors into enquiries."],
  ["02 Still Gardens", "02 Video Editing"],
  ["Witness the courts where silence gently unfolds.", "Cinematic edits, reels and storytelling built to hold attention."],
  ["03 Sacred Craft", "03 AI Creativity"],
  ["Embrace the hands and heritage that shape devotion.", "AI-assisted visuals, creative concepts and faster content workflows."],
  ["04 Night Rituals", "04 Creator Studio"],
  ["Explore the rites that awaken when the day is done.", "Thumbnails, voice and music editing, and content made to stand out."],
  ["01 — The Sanmon山門", "01 — Web Design & Development"],
  ["Charred cypress, worn stone, one gate left open.", "A digital presence built to make your brand unforgettable."],
  ["Kage begins where the city stops: a mountain gate of cedar burned black, standing in its own weather. The soot is not decoration. It is how a board is taught to survive a hundred rainy seasons, and the first thing this place asks you to understand.", "Every project starts with understanding your brand, your audience and your goal. I build modern, responsive websites with thoughtful design, smooth motion and clear calls to action."],
  ["Climb the worn steps and the worship hall lifts out of the mist, its paper screens lit from inside like a lantern the size of a house. Above the eaves a vermilion moon holds its place, patient, half hidden. Nothing here is in a hurry. Neither, for the next ninety minutes, are you.", "From a portfolio to a business website, the experience is tailored to your needs—designed for mobile first, easy to explore and ready to help visitors contact you."],
  ["Cross the threshold", "Build your website"],
  ["05 Chapters", "04 Creative Studios"],
  ["92 Minutes", "Your Vision"],
  ["1611 Hall raised", "Bhopal, India"],
  ["∞Stillness", "Endless Ideas"],
  ["02 — Still Gardens庭園", "02 — Video Editing"],
  ["The long climb 01 / 03", "Reels & Shorts 01 / 03"],
  ["Lantern court 02 / 03", "Cinematic Edits 02 / 03"],
  ["The wet court 03 / 03", "Storytelling 03 / 03"],
  ["03 — Sacred Craft手業", "03 — AI-Powered Creativity"],
  ["Five chapters. Ninety minutes. One quiet mind.", "Smart tools. Strong ideas. Creative work with purpose."],
  ["Each chapter is a walk, not a lecture. You arrive at the gate, climb the steps, sit with the lantern, and leave with one thing worth keeping.", "I combine creative thinking with AI tools to develop visuals, concepts and content efficiently—without losing the human touch that makes a brand feel real."],
  ["The Hidden Gate山門", "Website Design"],
  ["Why a gate is a sentence, and what you agree to when you walk under one.", "Custom layouts, responsive development and clear user journeys for your brand."],
  ["Borrowed Scenery借景", "Video Editing"],
  ["Shakkei: composing with a mountain you will never own.", "Reels, Shorts and long-form edits with pacing, sound design and visual storytelling."],
  ["Charred Cypress焼杉", "AI Visuals"],
  ["Yakisugi: burning a board black so the weather will let it live.", "AI-assisted creative visuals and concepts shaped around your brief."],
  ["Lantern Light灯籠", "Voice & Music"],
  ["How a single ember decides the scale of everything around it.", "Clean voiceovers, balanced audio and music edits that support the story."],
  ["The Vermilion Moon朱月", "Thumbnails & Content"],
  ["Why the moon burns red over the valley, and what the garden does with it.", "Scroll-stopping thumbnails and content assets made for creators and brands."],
  ["Chapter 04 — Afterlight", "Chapter 04 — Let's Create"],
  ["Afterlight", "Your Next Big Idea"],
  ["The gate does not close behind you. Take the walk whenever the noise gets loud — it is always the same path, and never the same light.", "Have a website or content project in mind? Let's discuss your goals and create something that fits your brand, audience and budget."],
  ["Begin the walk", "Let's Talk on WhatsApp"],
  ["A five-chapter night walk through a Kyoto mountain temple. Three illustrated garden field notes sit inside a live Three.js sanctuary.", "Ankit Noneriya is an AI & Digital Creative Specialist offering website design and development, video editing, AI-powered creative work, voice and music editing, thumbnail design and content creation."],
  ["The Sanmon", "Web Design"],
  ["Still Gardens", "Video Editing"],
  ["Sacred Craft", "AI Creativity"],
  ["Afterlight", "Contact"],
  ["Borrowed scenery", "Website Design"],
  ["Lantern light", "Voice & Music Editing"],
  ["Charred cypress", "AI Creative Work"],
  ["Raked gravel", "Thumbnail Design"],
  ["Journal", "Instagram"],
  ["Field notes", "YouTube"],
  ["Colophon", "Portfolio"],
  ["© 2026 Kage — Kage no Michi 静けさは一つの技である WebGL · Onest · Kyoto", "© 2026 Ankit Noneriya · AI & Digital Creative Specialist · Bhopal, Madhya Pradesh, India"]
];

for (const [from, to] of replacements) {
  html = html.split(from).join(to);
}

// Replace the large visible wordmark as well; the original scene and animation remain intact.\nhtml = html.split("KAGE").join("ANKIT");\n\n// Update document metadata without touching the scene, layout or animation code.
html = html.replace(/<title>[^<]*<\/title>/i, "<title>Ankit Noneriya — AI & Digital Creative Specialist</title>");
html = html.replace(/<meta name="description" content="[^"]*"/i, '<meta name="description" content="Ankit Noneriya — premium website design and development, video editing, AI-powered creative work, voice and music editing, thumbnail design and content creation."');
await writeFile(pagePath, html, "utf8");
console.log("Prepared Kage's original 3D scene and assets with Ankit Noneriya's studio copy.");
