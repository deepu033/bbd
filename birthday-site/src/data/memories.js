const imagePaths = Array.from({ length: 23 }, (_, index) => {
  const id = String(index + 1).padStart(2, '0')
  return `/images/memory-${id}.jpg`
})

// Replace captions and dates below with your real memory notes for Shikha.
const captions = [
  'A smile that brightens every room.',
  'That day full of laughter and chai.',
  'A tiny moment, a forever memory.',
  'Golden hour and golden heart.',
  'Pure joy, no filter needed.',
  'Another reason to celebrate you.',
  'Best company, best memories.',
  'You made this day unforgettable.',
  'Captured happiness in one frame.',
  'A beautiful chapter of us.',
  'A little chaos, a lot of fun.',
  'Moments that still make me grin.',
  'Sunset vibes and heart vibes.',
  'One more memory to treasure.',
  'A day that felt magical.',
  'The kind of memory that stays.',
  'Life looked better with you there.',
  'Smiles that felt like home.',
  'Unscripted and absolutely perfect.',
  'Forever grateful for this memory.',
  'A snapshot of pure happiness.',
  'A memory I will always keep close.',
  'One last cherished moment in time.'
]

const specialMessages = [
  'Every smile of yours feels like sunshine after rain.',
  'This moment reminds me how effortlessly you spread joy.',
  'Some memories fade, but this one glows because of you.',
  'You make ordinary days feel like festivals.',
  'The world feels softer and kinder when you are around.',
  'You are the kind of person people thank life for.',
  'Laughter is louder and hearts feel lighter with you.',
  'This frame is proof that happiness has your face.',
  'You turn tiny moments into lifelong stories.',
  'You are not just loved, you are deeply cherished.',
  'You make chaos beautiful and memories timeless.',
  'Some people are rare; you are one of them.',
  'Your energy is warm, bright, and unforgettable.',
  'You are the reason this memory still feels alive.',
  'Even simple days become magical with you in them.',
  'Your kindness leaves a mark on every heart you touch.',
  'You make life look beautiful without even trying.',
  'This memory holds a little piece of your sparkle.',
  'Being around you always feels like a celebration.',
  'Thank you for being a safe and happy place for everyone.',
  'You are the heartbeat of so many good memories.',
  'No matter the year, you stay special in every way.',
  'These moments with you are the greatest gift I could ask for.'
]

const dates = [
  'Jan 2022',
  'Mar 2022',
  'Jun 2022',
  'Sep 2022',
  'Dec 2022',
  'Feb 2023',
  'Apr 2023',
  'Jun 2023',
  'Aug 2023',
  'Oct 2023',
  'Dec 2023',
  'Jan 2024',
  'Feb 2024',
  'Apr 2024',
  'Jun 2024',
  'Aug 2024',
  'Sep 2024',
  'Oct 2024',
  'Nov 2024',
  'Dec 2024',
  'Jan 2025',
  'Feb 2025',
  'Mar 2025'
]

export const memories = imagePaths.map((src, index) => ({
  id: index + 1,
  src,
  caption: captions[index],
  specialMessage: specialMessages[index],
  date: dates[index],
}))
