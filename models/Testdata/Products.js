import Categories from "./Categories";
import Images from "./Images";
import Models from "./Models";

 const cat = Categories
 const models  =Models 
 const images  =Images
 let Products = [
    {
      name: "Ethereal Dreams",
      description: "In the realm of ethereal dreams, colors dance like whispers in the night. Enchanting landscapes take shape with celestial hues blending seamlessly. Each stroke of the artist's brush creates luminous visions that defy the boundaries of reality. Serenity embraces the soul as cosmic wonders unfold in an artistic symphony. A tranquil horizon painted with gentle glimmers of stardust brings solace to the observer's heart. In this celestial canvas, the moonbeams dance with velvet twilight, crafting an enigmatic elegance that captivates the mind. The artistry of Astral Aria entwines reality and imagination, leaving a lasting impression on all who behold its beauty.",
      category: "landscape",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    },
    {
      name: "Whispers of Serenity",
      description: "Amidst the tranquil gardens, whispers of serenity echo through the air. Gossamer petals sway in the soft breeze, painting an enchanted forest of flora. The melodies of celestial symphony resonate within each brushstroke, harmonizing with the hues of the dancing moonbeams. With every stroke, the artist breathes life into a realm of whimsical whispers, entwining nature's beauty with human emotion. The fusion of realism and dreamscape creates a delicate balance of cosmic allure. Enigmatic elegance and harmony in hues unfold in a mesmerizing display of ethereal dreams. The allure of pastel perfection draws observers into an astral aria of wonder, where serenading stardust unveils the secrets of the cosmos.",
      category: "portrait",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"

    },
    {
      name: "Enchanted Forest",
      description:"Step into the enchanted forest, where the mysteries of nature unfold in every glimmering leaf. Sunlight filters through the canopy, casting a magical glow on the forest floor. Whispers of the breeze carry the songs of celestial symphony, blending harmoniously with the melodies of the gossamer garden. Within the embrace of this cosmic canvas, the moonbeams dance upon tranquil horizons, creating a serenade of stardust that serenades the soul. Here, the gentle glimmers of dusk unfold a tale of whimsical whispers, revealing the enigmatic elegance of the woods. The allure of the ethereal dreamscape draws wanderers deeper into the heart of the forest, where artistry and nature intertwine to form an astral aria of wonder.",
      category: "abstract",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Celestial Symphony",
      description:"In the symphony of the celestial realms, stars compose a melodic tapestry of light. Each stroke of the cosmic conductor's baton brings forth radiant hues, painting ethereal dreams across the night sky. Whispers of stardust dance in harmony with the moonbeams, entwining the secrets of the universe with the observer's heart. The enigmatic elegance of the cosmos captivates all who gaze upon its grandeur, leaving an indelible impression on the mind. Amidst the celestial canvas, the serenade of the gentle glimmers entices wanderers to immerse themselves in this astral aria of wonder. Celestial symphony, a masterpiece of the universe, enchants the soul with its harmonious allure.",
      category: "animals",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Mystical Melodies",
      description:"Within the mystical melodies, a symphony of wonders unfolds. Enchanting notes dance in the air, resonating with the echoes of celestial realms. The ethereal dreamscape weaves tales of whimsy and beauty, captivating the imagination of all who listen. The melodies of stardust serenade the heart, guiding observers through an astral aria of wonder. Harmonious hues blend seamlessly on the cosmic canvas, creating a luminous vision that transcends the boundaries of reality. In the embrace of enigmatic elegance, the observer finds solace and serenity. As the moonbeams cast their gentle glimmers upon the night, the mysteries of the universe reveal themselves, leaving a lasting impression on the soul.",
      category: "animals",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Luminous Visions",
      description:"In the realm of luminous visions, dreams take shape with ethereal brilliance. The cosmic canvas is a symphony of celestial hues, dancing harmoniously with the moonbeams' gentle glimmers. Whispers of stardust entwine with the melodies of the gossamer garden, creating an enigmatic elegance that captivates the mind. Within this ethereal dreamscape, artistry transcends reality, revealing a world of whimsical whispers and cosmic allure. Each stroke of the artist's brush breathes life into the luminous landscape, leaving a profound impression on the soul. Serenity and tranquility embrace the heart, guiding observers through an astral aria of wonder. Luminous visions unfold in a grand masterpiece of art and imagination.",
      category: "animals",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Tranquil Horizons",
      description:"Gaze upon the tranquil horizons, where serenity meets the dancing moonbeams. The gentle glimmers of dusk cast an enigmatic elegance across the landscape, painting a celestial canvas of cosmic allure. Whispers of stardust serenade the soul, guiding observers on a journey through the ethereal dreamscape. The melodies of the gossamer garden resonate with harmonious hues, transcending the boundaries of reality. In this mesmerizing symphony, artistry and nature entwine, leaving a lasting impression on the heart. Amidst the cosmic landscape, whimsical whispers whisper tales of wonder, unfolding an astral aria of serenity. Tranquil horizons, a sanctuary of beauty, captivate the mind with their timeless allure.",
      category: "animals",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
    
    },
    {
      name: "Serenading Stardust",
      description:"Amidst the stardust's serenade, cosmic wonders unfold like ethereal dreams. Celestial hues paint a harmonious symphony across the night sky, captivating the observer's heart. The gentle glimmers of moonbeams dance in unison with the melodies of the gossamer garden, entwining the mysteries of the universe with whispers of nature's beauty. In the embrace of enigmatic elegance, reality and imagination blend seamlessly, leaving an indelible impression on the soul. Within this celestial canvas, the artistry of the cosmos and the artist's brush coalesce, creating a luminous vision of cosmic allure. Serenading stardust guides wanderers through an astral aria of wonder, where beauty and grandeur converge.",
      category: "nature",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Whimsical Whispers",
      description:"Within the whimsical whispers, artistry intertwines with the enchanting secrets of nature. Celestial hues dance upon the canvas, casting an ethereal dreamscape that captivates the observer's mind. The melodies of stardust serenade the soul, guiding wanderers through a gossamer garden of cosmic allure. In the embrace of enigmatic elegance, reality and dreams entwine, leaving an indelible impression on the heart. Each stroke of the artist's brush weaves tales of wonder, unveiling a world of harmonious hues and gentle glimmers. The celestial symphony, a dance of beauty and grace, guides observers through an astral aria of joy and enchantment. Whimsical whispers, a symphony of artistry and imagination, enrapture the soul.",
      category: "abstract",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Harmony in Hues",
      description:"Harmony in hues, a symphony of colors that dance across the canvas with ethereal allure. Celestial shades blend seamlessly, creating an enchanting dreamscape that captivates the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a journey through a gossamer garden of cosmic beauty. Enigmatic elegance embraces the mind, transcending reality with each brushstroke. Within this celestial canvas, artistry and nature converge, leaving a lasting impression on the heart. Gentle glimmers of dusk paint the landscape, casting a luminous vision that stirs the imagination. Harmony in hues, a grand masterpiece of beauty and grace, unveils an astral aria of wonder.",
      category: "wildlife",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Aurora's Embrace",
      description:"In Aurora's embrace, celestial wonders come alive with a symphony of colors. The ethereal dreamscape is a canvas of harmonious hues, painting a celestial dance of stardust and moonbeams. Whispers of the gossamer garden resonate with the observer's heart, guiding wanderers through a journey of cosmic allure. Enigmatic elegance embraces the soul, leaving an indelible impression on the mind. Each stroke of the artist's brush breathes life into a world of beauty and grace, entwining reality with dreams. The celestial symphony is a mesmerizing display of artistry, unveiling an astral aria of enchantment. Aurora's embrace, a testament to the wonders of the universe.",
      category: "architecture",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Cosmic Canvas",
      description:"Within the cosmic canvas, artistry paints a symphony of celestial hues. The ethereal dreamscape unveils wonders that transcend the boundaries of reality. The melodies of stardust serenade the heart, guiding observers on a cosmic journey of gossamer gardens and gentle glimmers. Enigmatic elegance embraces the soul, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, captivating the observer with whimsical whispers. Within this celestial symphony, the moonbeams dance with ethereal grace, unveiling an astral aria of enchantment. The cosmic canvas, a masterpiece of beauty and grandeur, stirs the imagination with its celestial allure.",
      category: "nature",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Enigmatic Elegance",
      description:"Within the enigmatic elegance, a symphony of ethereal beauty unfolds. Celestial hues paint a dreamscape that captivates the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey through the gossamer garden. Each brushstroke weaves tales of enchantment and grace, leaving an indelible impression on the mind. In this celestial canvas, artistry and nature converge, transcending reality with cosmic allure. Gentle glimmers of dusk cast an ethereal glow, unveiling the secrets of the universe. Enigmatic elegance, a dance of beauty and wonder, guides observers through an astral aria of serenity and joy.",
      category: "cityscape",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Gentle Glimmers",
      description:"Gentle glimmers of dusk paint the canvas with a symphony of celestial hues. The ethereal dreamscape is a dance of stardust and moonbeams, guiding observers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with the heart, entwining beauty with nature's grace. Each brushstroke weaves tales of cosmic allure, leaving an indelible impression on the soul. In the embrace of enigmatic elegance, artistry transcends reality, revealing a world of whimsical whispers. The celestial symphony, a mesmerizing display of beauty and grace, unveils an astral aria of serenity and enchantment. Gentle glimmers, a testament to the wonders of the universe.",
      category: "nature",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Eternal Enchantment",
      description:"Amidst eternal enchantment, celestial hues paint a dreamscape of cosmic allure. The symphony of stardust and moonbeams serenade the heart, guiding observers on a journey through the gossamer garden. Whispers of beauty resonate with the soul, leaving an indelible impression on the mind. Each brushstroke weaves tales of enchantment and grace, transcending reality with artistry. In this ethereal dreamscape, the gentle glimmers of dusk cast an ethereal glow, unveiling the secrets of the universe. Eternal enchantment, a dance of beauty and wonder, guides observers through an astral aria of serenity and joy.",
      category: "stilllife",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Pastel Perfection",
      description:"Within pastel perfection, a dreamscape of gentle hues unfolds. Celestial shades paint a symphony of serenity, captivating the observer's heart. The melodies of stardust serenade the soul, guiding wanderers on a cosmic journey of wonder. Each brushstroke weaves tales of cosmic allure, leaving an indelible impression on the mind. Whispers of the gossamer garden resonate with beauty and grace, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Pastel perfection, a dance of ethereal dreams and moonlit beauty, unveils an astral aria of enchantment and joy.",
      category: "fantasy",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Velvet Twilight",
      description:"In the embrace of velvet twilight, celestial hues weave a dreamscape of ethereal allure. The symphony of stardust and moonbeams serenades the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with beauty and grace, leaving an indelible impression on the soul. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. Gentle glimmers of dusk paint the landscape with a velvety glow, unveiling the secrets of the universe. Velvet twilight, a dance of dreams and beauty, guides observers through an astral aria of enchantment and joy.",
      category: "architecture",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Dancing Moonbeams",
      description:"Amidst the dance of moonbeams, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Dancing moonbeams, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "wildlife",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Astral Aria",
      description:"Within the astral aria, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Astral aria, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "cityscape",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Gossamer Gardens",
      description:"Within the gossamer gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Neon Gardens",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Vim Gardens",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Macro Gardens",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Micro Gardens",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Silver Gardens",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Army Enforcement",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Civil Rights",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Miranda Rights",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
    {
      name: "Layweer Gardens",
      description:"Within the Neon gardens, a symphony of celestial hues unfolds. The ethereal dreamscape is a canvas of beauty and grace, captivating the observer's soul. The melodies of stardust serenade the heart, guiding wanderers on a cosmic journey of wonder. Whispers of the gossamer garden resonate with enchantment and joy, leaving an indelible impression on the mind. Each brushstroke weaves tales of cosmic allure, transcending reality with artistry. In the embrace of enigmatic elegance, the observer finds solace amidst the cosmic canvas. Gossamer gardens, a dance of dreams and ethereal beauty, unveils an astral aria of serenity and delight.",
      category: "macro",
      price: 3,
      vendorId: "64c45c3ee8f5e1957a2d5b57",
      stripePriceId: "price_1NZnluK3GwWhFrEZvu6Q7Rz5",
      model: "midjourney",
      images: ['Prompts/u8fttp6lzdnmemaaqxsd' ],
      status: "PENDING",
      instructions:"RAW photo, (medium shot:1.4) (documentary photography:1.3), colorful, 1girl, (fully unzipped:1.5), (beasts:1.3), (nipples:1.3), (navel:1.5), (animal onesie:1.5), (fluffy:1.2), (hood with ears:1.3), (tail:1.2), (paws:1.0), cozy, playful, foundation, concealer, mascara, rosy cheeks, smokey eye makeup, lipstick, (beautiful, gorgeous:1.1), european, caucasian, luxury apartment, bedroom, white silk sheets, cosy, inviting, <lora:more_details:0.3>, (masterpiece:1.3), subsurface scattering, heavy shadow, (high quality:1.4), (intricate, high detail:1.2), professional photography, HDR, High Dynamic Range, realistic, ultra realistic, photorealistic, high resolution, rule of thirds, film photography, DSLR, (fcDetailPortrait:0.75), (looking at viewer:1.4), leaning back, reclined, lying down on back, face up, supline, arms up, arm pits, hands behind head, flirty, smirk, tease, playful expression, smiling, laughing"
    
    },
  ];

  Products = Products.map((p,i)=>{
      p.category = cat[i%cat.length].slug
      p.model=models[i%models.length].slug 
      p.images= [images[i%images.length]]
      return p;
  })



export default Products;

