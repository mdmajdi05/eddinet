// ============================================================================
//  FILE: data/services/child/design-creative/video-editing.ts
//  PAGE: /services/design-creative/video-editing
//  Is page ka POORA content isi file me hai — yahi single source hai.
//  Naya child page: ye file copy karo, content badlo, phir pages.ts me
//  ek import + ek entry add karo.
// ============================================================================

import { crossLinksFor, sharedMetrics, sharedTestimonials } from "../_shared";
import { benefits } from "../_category/design-creative";
export const child = {
  slug: "video-editing",
  title: "Video Editing",
  metaTitle: "Video Editing Services in India | Eddinet",
  metaDescription: "EDDINET provides professional video editing services in Delhi to help brands, creators, and businesses transform raw footage into high-retention visual",
  heroHeading: "Video Editing Services in Delhi",
  heroSubheading: "YouTube Video Editing | Corporate Video Editing | Reels & Social Media Edits",
  detailedDescription: "EDDINET provides professional video editing services in Delhi to help brands, creators, and businesses transform raw footage into high-retention visual stories. Our post-production team combines cinematic pacing, seamless transitions, and immersive sound design to capture audience attention and keep viewers watching until the final frame.\n\nDo your videos lose viewers within the first few seconds? Is your footage sitting unused because nobody has time to edit it? If yes, EDDINET is the solution to your problem.\n\nAs a professional video editing agency in Delhi, we work with creators, brands, and companies that want polished videos without building an in-house team. We watch your footage, learn your goal, and edit with the viewer in mind. You then receive videos that feel smooth, purposeful, and ready to publish.",
  features: [
    {
      title: "YouTube Video Editing Services",
      description: "Long videos need rhythm. We cut dead air, add captions, graphics, and music, and shape a strong opening so viewers stay. We can also design thumbnails and chapter markers, which helps your channel grow steadily.",
    },
    {
      title: "Corporate Video Editing",
      description: "Company videos should look calm, clear, and credible. We edit product demos, training clips, event recordings, and brand films into tidy, professional pieces. As a result, your message reaches clients and employees without distraction.",
    },
    {
      title: "Social Media Video Editing",
      description: "Each platform has its own shape and speed. We resize, caption, and re-pace your footage for Instagram, Facebook, LinkedIn, and Shorts. Consequently, one recording can become several posts that feel native to each feed.",
    },
    {
      title: "Reels Editing Service",
      description: "Reels reward quick cuts and instant hooks. Our reels editing service adds trending-style transitions, punchy text, and beat-matched music to your clips. In addition, every reel is framed vertically with text kept inside the safe area.",
    },
  ],
  benefits,
  metrics: sharedMetrics,
  whyChooseUs: {
    heading: "Why Choose Eddinet for Video Editing Services in Delhi",
    points: [
      "Hook-first editing: We plan the opening seconds with care, because that is where viewers decide to stay. Strong starts reduce early drop-offs. Your message gets a fair chance.",
      "Clean, clear audio: Poor sound drives viewers away faster than poor visuals. We reduce noise and balance voices and music. Your video is pleasant to listen to.",
      "Platform-ready exports: Files match the size, length, and format each channel prefers. Text and faces stay inside safe areas. Videos look right on every screen.",
      "Consistent brand look: Fonts, colours, and logos follow your style across every edit. Viewers recognise your content quickly. Your channel feels like one connected story.",
      "Clear revision limits: Revision rounds are written down before we start. Extra changes are discussed first. Your budget stays predictable.",
      "Steady delivery for regular content: Once your style is set, weekly videos move quickly. Deadlines stay realistic. Your content calendar never stalls.",
    ],
  },
  process: {
    heading: "Our Process for Video Editing in Delhi",
    steps: [
      {
        num: "01",
        title: "Brief and footage review",
        description: "You share the goal, audience, and reference videos. We watch all the footage and note the best moments. This sets a clear direction before any cutting begins.",
      },
      {
        num: "02",
        title: "Rough cut",
        description: "Next, we assemble the story in order and remove weak sections. You see the structure early. Big changes are easy at this stage.",
      },
      {
        num: "03",
        title: "Fine cut and pacing",
        description: "Then we tighten each scene, smooth transitions, and match cuts to the rhythm of speech or music. The video starts to feel natural. Viewers stay with it longer.",
      },
      {
        num: "04",
        title: "Sound, colour, and graphics",
        description: "We clean the audio, balance colours, and add titles, captions, and logos. Details are checked on both phone and desktop. Nothing looks rushed.",
      },
      {
        num: "05",
        title: "Feedback round",
        description: "We apply your comments in one organised pass. Spelling, timing, and brand details are checked again. Small errors never reach your audience.",
      },
      {
        num: "06",
        title: "Export and delivery",
        description: "Finally, you receive files in the right format and size for each platform. Project files can be shared on request. Your team can upload immediately.",
      },
    ],
    description: "Here is how raw footage becomes a finished video.",
  },
  testimonials: sharedTestimonials,
  faqs: [
    {
      q: "How much do video editing services in Delhi cost?",
      a: "The price depends on video length, complexity, and revision rounds. A short reel costs far less than a long corporate film with graphics. After a short discovery call, we share a clear quote with no hidden charges.",
    },
    {
      q: "How long does it take to edit a video?",
      a: "A short reel or social clip can take one to two days. A long YouTube video or corporate film usually takes three to seven days. We share a timeline before work begins.",
    },
    {
      q: "What do you need from me to start editing?",
      a: "Send your raw footage, logo, preferred fonts and colours, and a few reference videos you like. A short note about your goal and audience also helps. We confirm the full list after your brief.",
    },
    {
      q: "Can you edit videos for YouTube and Instagram reels both?",
      a: "Yes. We edit long-form YouTube videos and short vertical reels, and we can repurpose one recording for both. Each version is paced and sized for its platform.",
    },
    {
      q: "Why hire a video editing company instead of editing in-house?",
      a: "A company gives you a trained team, a tested process, and backup when one person is unavailable. You also avoid the cost of software, hardware, and hiring. This frees your team to focus on creating and growing.",
    },
  ],
  crossLinks: crossLinksFor("design-creative"),
  featuresHeading: "Our Video Editing Services in Delhi",
  featuresDescription: "We focus on four services that cover the places your videos are watched.",
  docxHeadings: {
    about: "About Us: Professional Video Editing Agency in Delhi",
    process: "Our Process for Video Editing in Delhi",
    faqs: "FAQs",
  },
};
