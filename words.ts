export type PartsOfSpeech = keyof typeof wordList;

export const wordList = {
  noun: [
    { word: "mother", categories: ["people", "family"] },
    { word: "father", categories: ["people", "family"] },
    { word: "baby", categories: ["people", "family"] },
    { word: "child", categories: ["people", "family"] },
    { word: "toddler", categories: ["people", "family"] },
    { word: "teenager", categories: ["people", "family"] },
    { word: "grandmother", categories: ["people", "family"] },
    { word: "student", categories: ["people", "education"] },
    { word: "teacher", categories: ["people", "education"] },
    { word: "minister", categories: ["people", "religion"] },
    { word: "businessperson", categories: ["people", "business"] },
    { word: "salesclerk", categories: ["people", "business"] },
    { word: "woman", categories: ["people"] },
    { word: "man", categories: ["people"] },
    { word: "lion", categories: ["animals"] },
    { word: "tiger", categories: ["animals"] },
    { word: "bear", categories: ["animals"] },
    { word: "dog", categories: ["animals"] },
    { word: "cat", categories: ["animals"] },
    { word: "alligator", categories: ["animals"] },
    { word: "cricket", categories: ["animals"] },
    { word: "bird", categories: ["animals"] },
    { word: "wolf", categories: ["animals"] },
    { word: "table", categories: ["thing"] },
    { word: "truck", categories: ["thing", "transportation"] },
    { word: "book", categories: ["thing", "education"] },
    { word: "pencil", categories: ["thing", "education"] },
    { word: "computer", categories: ["thing", "technology"] },
    { word: "laptop", categories: ["thing", "technology"] },
    { word: "smartphone", categories: ["thing", "technology"] },
    { word: "processor", categories: ["thing", "technology"] },
    { word: "memory", categories: ["thing", "technology"] },
    { word: "motherboard", categories: ["thing", "technology"] },
    { word: "hard-drive", categories: ["thing", "technology"] },
    { word: "cpu", categories: ["thing", "technology"] },
    { word: "gpu", categories: ["thing", "technology"] },
    { word: "ram", categories: ["thing", "technology"] },
    { word: "vr", categories: ["thing", "technology"] },
    { word: "video-game", categories: ["thing", "technology"] },
    { word: "printer", categories: ["thing", "technology"] },
    { word: "fax-machine", categories: ["thing", "technology"] },
    { word: "pager", categories: ["thing", "technology"] },
    { word: "keyboard", categories: ["thing", "technology"] },
    { word: "mouse", categories: ["thing", "technology", "animal"] },
    { word: "joystick", categories: ["thing", "technology"] },
    { word: "controller", categories: ["thing", "technology"] },
    { word: "monitor", categories: ["thing", "technology"] },
    { word: "bit", categories: ["thing", "technology"] },
    { word: "byte", categories: ["thing", "technology"] },
    { word: "kilobyte", categories: ["thing", "technology"] },
    { word: "megabyte", categories: ["thing", "technology"] },
    { word: "gigabyte", categories: ["thing", "technology"] },
    { word: "terabyte", categories: ["thing", "technology"] },
    { word: "petabyte", categories: ["thing", "technology"] },
    { word: "exabyte", categories: ["thing", "technology"] },
    { word: "zettabyte", categories: ["thing", "technology"] },
    { word: "yottabyte", categories: ["thing", "technology"] },
    { word: "coat", categories: ["thing"] },
    { word: "boots", categories: ["thing"] },
    { word: "city", categories: ["place"] },
    { word: "state", categories: ["place"] },
    { word: "country", categories: ["place"] },
    { word: "continent", categories: ["place"] },
    { word: "coffeeshop", categories: ["place"] },
    { word: "restaurant", categories: ["place"] },
    { word: "park", categories: ["place"] },
    { word: "actor", categories: ["profession"] },
    { word: "engineer", categories: ["profession"] },
    { word: "intern", categories: ["profession"] },
    { word: "teacher", categories: ["profession"] },
    { word: "plumber", categories: ["profession"] },
    { word: "architect", categories: ["profession"] },
    { word: "psychiatrist", categories: ["profession"] },
    { word: "nurse", categories: ["profession"] },
    { word: "salesmen", categories: ["profession"] },
    { word: "barista", categories: ["profession"] },
    { word: "chef", categories: ["profession"] },
    { word: "pilot", categories: ["profession"] },
    { word: "carpenter", categories: ["profession"] },
    { word: "electrician", categories: ["profession"] },
    { word: "dentist", categories: ["profession"] },
    { word: "butcher", categories: ["profession"] },
    { word: "baker", categories: ["profession"] },
    { word: "author", categories: ["profession"] },
    { word: "accountant", categories: ["profession"] },
    { word: "artist", categories: ["profession"] },
    { word: "musician", categories: ["profession"] },
    { word: "farmer", categories: ["profession"] },
    { word: "fireman", categories: ["profession"] },
    { word: "florist", categories: ["profession"] },
    { word: "hairdresser", categories: ["profession"] },
    { word: "journalist", categories: ["profession"] },
    { word: "judge", categories: ["profession"] },
    { word: "librarian", categories: ["profession"] },
    { word: "lifeguard", categories: ["profession"] },
    { word: "mechanic", categories: ["profession"] },
    { word: "optician", categories: ["profession"] },
    { word: "painter", categories: ["profession"] },
    { word: "pharmacist", categories: ["profession"] },
    { word: "photographer", categories: ["profession"] },
    { word: "policeman", categories: ["profession"] },
    { word: "postman", categories: ["profession"] },
    { word: "receptionist", categories: ["profession"] },
    { word: "scientist", categories: ["profession"] },
    { word: "secretary", categories: ["profession"] },
    { word: "tailor", categories: ["profession"] },
    { word: "translator", categories: ["profession"] },
    { word: "waiter", categories: ["profession"] },
    { word: "waitress", categories: ["profession"] },
    { word: "advertisement", categories: ["media"] },
    { word: "afternoon", categories: ["time"] },
    { word: "morning", categories: ["time"] },
    { word: "night", categories: ["time"] },
    { word: "noon", categories: ["time"] },
    { word: "midnight", categories: ["time"] },
    { word: "dawn", categories: ["time"] },
    { word: "dusk", categories: ["time"] },
    { word: "nightfall", categories: ["time"] },
    { word: "sundown", categories: ["time"] },
    { word: "sunset", categories: ["time"] },
    { word: "twilight", categories: ["time"] },
    { word: "evening", categories: ["time"] },
    { word: "eventide", categories: ["time"] },
    { word: "solstice ", categories: ["time"] },
    { word: "morn", categories: ["time"] },
    { word: "eve", categories: ["time"] },
    { word: "daybreak", categories: ["time"] },
    { word: "summer", categories: ["time"] },
    { word: "fall", categories: ["time"] },
    { word: "autumn", categories: ["time"] },
    { word: "winter", categories: ["time"] },
    { word: "spring", categories: ["time"] },
    { word: "airport", categories: ["transportation"] },
    { word: "ambulance", categories: ["health"] },
    { word: "animal", categories: ["animals"] },
    { word: "answer", categories: ["thing"] },
    { word: "apple", categories: ["food"] },
    { word: "army", categories: ["thing"] },
    { word: "australia", categories: ["place"] },
    { word: "balloon", categories: ["thing"] },
    { word: "banana", categories: ["food"] },
    { word: "battery", categories: ["thing"] },
    { word: "beach", categories: ["place"] },
    { word: "beard", categories: ["thing"] },
    { word: "bed", categories: ["thing"] },
    { word: "belgium", categories: ["place"] },
    { word: "boy", categories: ["people"] },
    { word: "branch", categories: ["thing"] },
    { word: "breakfast", categories: ["thing"] },
    { word: "brother", categories: ["family"] },
    { word: "camera", categories: ["thing"] },
    { word: "candle", categories: ["thing"] },
    { word: "car", categories: ["transportation"] },
    { word: "caravan", categories: ["transportation"] },
    { word: "carpet", categories: ["thing"] },
    { word: "cartoon", categories: ["media"] },
    { word: "china", categories: ["place"] },
    { word: "church", categories: ["religion"] },
    { word: "crayon", categories: ["thing"] },
    { word: "crowd", categories: ["people"] },
    { word: "daughter", categories: ["family"] },
    { word: "death", categories: ["thing"] },
    { word: "denmark", categories: ["place"] },
    { word: "diamond", categories: ["thing"] },
    { word: "dinner", categories: ["food"] },
    { word: "disease", categories: ["thing"] },
    { word: "doctor", categories: ["profession"] },
    { word: "dog", categories: ["animals"] },
    { word: "dream", categories: ["thing"] },
    { word: "dress", categories: ["thing"] },
    { word: "easter", categories: ["religion"] },
    { word: "egg", categories: ["food"] },
    { word: "eggplant", categories: ["food"] },
    { word: "egypt", categories: ["place"] },
    { word: "elephant", categories: ["animals"] },
    { word: "energy", categories: ["thing"] },
    { word: "engine", categories: ["transportation"] },
    { word: "england", categories: ["place"] },
    { word: "evening", categories: ["thing"] },
    { word: "eye", categories: ["thing"] },
    { word: "family", categories: ["family"] },
    { word: "finland", categories: ["place"] },
    { word: "fish", categories: ["animals"] },
    { word: "flag", categories: ["thing"] },
    { word: "flower", categories: ["thing"] },
    { word: "football", categories: ["sports"] },
    { word: "forest", categories: ["place"] },
    { word: "fountain", categories: ["thing"] },
    { word: "france", categories: ["place"] },
    { word: "furniture", categories: ["thing"] },
    { word: "garage", categories: ["place"] },
    { word: "gold", categories: ["thing"] },
    { word: "grass", categories: ["thing"] },
    { word: "greece", categories: ["place"] },
    { word: "guitar", categories: ["thing"] },
    { word: "hair", categories: ["thing"] },
    { word: "hamburger", categories: ["food"] },
    { word: "helicopter", categories: ["transportation"] },
    { word: "helmet", categories: ["thing"] },
    { word: "holiday", categories: ["thing"] },
    { word: "honey", categories: ["food"] },
    { word: "horse", categories: ["animals"] },
    { word: "hospital", categories: ["place"] },
    { word: "house", categories: ["place"] },
    { word: "hydrogen", categories: ["science"] },
    { word: "ice", categories: ["science"] },
    { word: "insect", categories: ["animals"] },
    { word: "insurance", categories: ["thing"] },
    { word: "iron", categories: ["science"] },
    { word: "island", categories: ["place"] },
    { word: "jackal", categories: ["animals"] },
    { word: "jelly", categories: ["food"] },
    { word: "jewellery", categories: ["thing"] },
    { word: "jordan", categories: ["place"] },
    { word: "juice", categories: ["food"] },
    { word: "kangaroo", categories: ["animals"] },
    { word: "king", categories: ["people"] },
    { word: "kitchen", categories: ["place"] },
    { word: "kite", categories: ["thing"] },
    { word: "knife", categories: ["thing"] },
    { word: "lamp", categories: ["thing"] },
    { word: "lawyer", categories: ["profession"] },
    { word: "leather", categories: ["thing"] },
    { word: "library", categories: ["place"] },
    { word: "lighter", categories: ["thing"] },
    { word: "lion", categories: ["animals"] },
    { word: "lizard", categories: ["animals"] },
    { word: "lock", categories: ["thing"] },
    { word: "london", categories: ["place"] },
    { word: "lunch", categories: ["food"] },
    { word: "machine", categories: ["science"] },
    { word: "magazine", categories: ["media"] },
    { word: "magician", categories: ["people"] },
    { word: "manchester", categories: ["place"] },
    { word: "market", categories: ["place"] },
    { word: "match", categories: ["thing"] },
    { word: "microphone", categories: ["thing"] },
    { word: "monkey", categories: ["animals"] },
    { word: "morning", categories: ["thing"] },
    { word: "motorcycle", categories: ["transportation"] },
    { word: "nail", categories: ["thing"] },
    { word: "napkin", categories: ["thing"] },
    { word: "needle", categories: ["thing"] },
    { word: "nest", categories: ["thing"] },
    { word: "nigeria", categories: ["place"] },
    { word: "night", categories: ["thing"] },
    { word: "notebook", categories: ["thing"] },
    { word: "ocean", categories: ["place"] },
    { word: "oil", categories: ["thing"] },
    { word: "orange", categories: ["food"] },
    { word: "oxygen", categories: ["science"] },
    { word: "oyster", categories: ["animals"] },
    { word: "ghost", categories: ["thing"] },
    { word: "painting", categories: ["media"] },
    { word: "parrot", categories: ["animals"] },
    { word: "pencil", categories: ["thing"] },
    { word: "piano", categories: ["thing"] },
    { word: "pillow", categories: ["thing"] },
    { word: "pizza", categories: ["food"] },
    { word: "planet", categories: ["science"] },
    { word: "plastic", categories: ["thing"] },
    { word: "portugal", categories: ["place"] },
    { word: "potato", categories: ["food"] },
    { word: "queen", categories: ["people"] },
    { word: "quill", categories: ["thing"] },
    { word: "rain", categories: ["thing"] },
    { word: "rainbow", categories: ["science"] },
    { word: "raincoat", categories: ["thing"] },
    { word: "refrigerator", categories: ["food"] },
    { word: "restaurant", categories: ["place"] },
    { word: "river", categories: ["thing"] },
    { word: "rocket", categories: ["science"] },
    { word: "room", categories: ["place"] },
    { word: "rose", categories: ["thing"] },
    { word: "russia", categories: ["place"] },
    { word: "sandwich", categories: ["food"] },
    { word: "school", categories: ["education"] },
    { word: "scooter", categories: ["transportation"] },
    { word: "shampoo", categories: ["thing"] },
    { word: "shoe", categories: ["thing"] },
    { word: "soccer", categories: ["sports"] },
    { word: "spoon", categories: ["thing"] },
    { word: "stone", categories: ["thing"] },
    { word: "sugar", categories: ["food"] },
    { word: "sweden", categories: ["place"] },
    { word: "teacher", categories: ["education"] },
    { word: "telephone", categories: ["thing"] },
    { word: "television", categories: ["media"] },
    { word: "tent", categories: ["thing"] },
    { word: "thailand", categories: ["place"] },
    { word: "tomato", categories: ["food"] },
    { word: "toothbrush", categories: ["thing"] },
    { word: "traffic", categories: ["thing"] },
    { word: "train", categories: ["transportation"] },
    { word: "truck", categories: ["transportation"] },
    { word: "uganda", categories: ["place"] },
    { word: "umbrella", categories: ["thing"] },
    { word: "van", categories: ["transportation"] },
    { word: "vase", categories: ["thing"] },
    { word: "vegetable", categories: ["food"] },
    { word: "vulture", categories: ["animals"] },
    { word: "wall", categories: ["thing"] },
    { word: "whale", categories: ["animals"] },
    { word: "window", categories: ["thing"] },
    { word: "wire", categories: ["thing"] },
    { word: "xylophone", categories: ["thing"] },
    { word: "yacht", categories: ["transportation"] },
    { word: "yak", categories: ["animals"] },
    { word: "zebra", categories: ["animals"] },
    { word: "zoo", categories: ["animals"] },
    { word: "garden", categories: ["food"] },
    { word: "gas", categories: ["transportation"] },
    { word: "girl", categories: ["people"] },
    { word: "glass", categories: ["thing"] },
  ] as const,
  adjective: [
    { word: "attractive", categories: ["appearance"] },
    { word: "bald", categories: ["appearance"] },
    { word: "beautiful", categories: ["appearance"] },
    { word: "chubby", categories: ["appearance"] },
    { word: "clean", categories: ["appearance"] },
    { word: "dazzling", categories: ["appearance"] },
    { word: "drab", categories: ["appearance"] },
    { word: "elegant", categories: ["appearance"] },
    { word: "fancy", categories: ["appearance"] },
    { word: "fit", categories: ["appearance"] },
    { word: "flabby", categories: ["appearance"] },
    { word: "glamorous", categories: ["appearance"] },
    { word: "gorgeous", categories: ["appearance"] },
    { word: "handsome", categories: ["appearance"] },
    { word: "long", categories: ["appearance"] },
    { word: "magnificent", categories: ["appearance"] },
    { word: "muscular", categories: ["appearance"] },
    { word: "plain", categories: ["appearance"] },
    { word: "plump", categories: ["appearance"] },
    { word: "quaint", categories: ["appearance"] },
    { word: "scruffy", categories: ["appearance"] },
    { word: "shapely", categories: ["appearance"] },
    { word: "short", categories: ["appearance"] },
    { word: "skinny", categories: ["appearance"] },
    { word: "stocky", categories: ["appearance"] },
    { word: "ugly", categories: ["appearance"] },
    { word: "unkempt", categories: ["appearance"] },
    { word: "unsightly", categories: ["appearance"] },
    { word: "black", categories: ["color"] },
    { word: "blue", categories: ["color"] },
    { word: "gray", categories: ["color"] },
    { word: "green", categories: ["color"] },
    { word: "icy", categories: ["color"] },
    { word: "lemon", categories: ["color"] },
    { word: "mango", categories: ["color"] },
    { word: "orange", categories: ["color"] },
    { word: "purple", categories: ["color"] },
    { word: "red", categories: ["color"] },
    { word: "salmon", categories: ["color"] },
    { word: "white", categories: ["color"] },
    { word: "yellow", categories: ["color"] },
    { word: "alive", categories: ["condition"] },
    { word: "better", categories: ["condition"] },
    { word: "careful", categories: ["condition"] },
    { word: "clever", categories: ["condition"] },
    { word: "dead", categories: ["condition"] },
    { word: "easy", categories: ["condition"] },
    { word: "famous", categories: ["condition"] },
    { word: "gifted", categories: ["condition"] },
    { word: "hallowed", categories: ["condition"] },
    { word: "helpful", categories: ["condition"] },
    { word: "important", categories: ["condition"] },
    { word: "inexpensive", categories: ["condition"] },
    { word: "mealy", categories: ["condition"] },
    { word: "mushy", categories: ["condition"] },
    { word: "odd", categories: ["condition"] },
    { word: "poor", categories: ["condition"] },
    { word: "powerful", categories: ["condition"] },
    { word: "rich", categories: ["condition"] },
    { word: "shy", categories: ["condition"] },
    { word: "tender", categories: ["condition"] },
    { word: "unimportant", categories: ["condition"] },
    { word: "uninterested", categories: ["condition"] },
    { word: "vast", categories: ["condition"] },
    { word: "wrong", categories: ["condition"] },
    { word: "aggressive", categories: ["personality"] },
    { word: "agreeable", categories: ["personality"] },
    { word: "ambitious", categories: ["personality"] },
    { word: "brave", categories: ["personality"] },
    { word: "calm", categories: ["personality"] },
    { word: "delightful", categories: ["personality"] },
    { word: "eager", categories: ["personality"] },
    { word: "faithful", categories: ["personality"] },
    { word: "gentle", categories: ["personality"] },
    { word: "happy", categories: ["personality"] },
    { word: "jolly", categories: ["personality"] },
    { word: "kind", categories: ["personality"] },
    { word: "lively", categories: ["personality"] },
    { word: "nice", categories: ["personality"] },
    { word: "obedient", categories: ["personality"] },
    { word: "polite", categories: ["personality"] },
    { word: "proud", categories: ["personality"] },
    { word: "silly", categories: ["personality"] },
    { word: "thankful", categories: ["personality"] },
    { word: "victorious", categories: ["personality"] },
    { word: "witty", categories: ["personality"] },
    { word: "wonderful", categories: ["personality"] },
    { word: "zealous", categories: ["personality"] },
    { word: "angry", categories: ["personality"] },
    { word: "bewildered", categories: ["personality"] },
    { word: "clumsy", categories: ["personality"] },
    { word: "defeated", categories: ["personality"] },
    { word: "embarrassed", categories: ["personality"] },
    { word: "fierce", categories: ["personality"] },
    { word: "grumpy", categories: ["personality"] },
    { word: "helpless", categories: ["personality"] },
    { word: "itchy", categories: ["personality"] },
    { word: "jealous", categories: ["personality"] },
    { word: "lazy", categories: ["personality"] },
    { word: "mysterious", categories: ["personality"] },
    { word: "nervous", categories: ["personality"] },
    { word: "obnoxious", categories: ["personality"] },
    { word: "panicky", categories: ["personality"] },
    { word: "pitiful", categories: ["personality"] },
    { word: "repulsive", categories: ["personality"] },
    { word: "scary", categories: ["personality"] },
    { word: "thoughtless", categories: ["personality"] },
    { word: "uptight", categories: ["personality"] },
    { word: "worried", categories: ["personality"] },
    { word: "broad", categories: ["shapes"] },
    { word: "chubby", categories: ["shapes"] },
    { word: "crooked", categories: ["shapes"] },
    { word: "curved", categories: ["shapes"] },
    { word: "deep", categories: ["shapes"] },
    { word: "flat", categories: ["shapes"] },
    { word: "high", categories: ["shapes"] },
    { word: "hollow", categories: ["shapes"] },
    { word: "low", categories: ["shapes"] },
    { word: "narrow", categories: ["shapes"] },
    { word: "refined", categories: ["shapes"] },
    { word: "round", categories: ["shapes"] },
    { word: "shallow", categories: ["shapes"] },
    { word: "skinny", categories: ["shapes"] },
    { word: "square", categories: ["shapes"] },
    { word: "steep", categories: ["shapes"] },
    { word: "straight", categories: ["shapes"] },
    { word: "wide", categories: ["shapes"] },
    { word: "big", categories: ["size"] },
    { word: "colossal", categories: ["size"] },
    { word: "fat", categories: ["size"] },
    { word: "gigantic", categories: ["size"] },
    { word: "great", categories: ["size"] },
    { word: "huge", categories: ["size"] },
    { word: "immense", categories: ["size"] },
    { word: "large", categories: ["size"] },
    { word: "little", categories: ["size"] },
    { word: "mammoth", categories: ["size"] },
    { word: "massive", categories: ["size"] },
    { word: "microscopic", categories: ["size"] },
    { word: "miniature", categories: ["size"] },
    { word: "petite", categories: ["size"] },
    { word: "puny", categories: ["size"] },
    { word: "scrawny", categories: ["size"] },
    { word: "short", categories: ["size"] },
    { word: "small", categories: ["size"] },
    { word: "tall", categories: ["size"] },
    { word: "teeny", categories: ["size"] },
    { word: "tiny", categories: ["size"] },
    { word: "crashing", categories: ["sounds"] },
    { word: "deafening", categories: ["sounds"] },
    { word: "echoing", categories: ["sounds"] },
    { word: "faint", categories: ["sounds"] },
    { word: "harsh", categories: ["sounds"] },
    { word: "hissing", categories: ["sounds"] },
    { word: "howling", categories: ["sounds"] },
    { word: "loud", categories: ["sounds"] },
    { word: "melodic", categories: ["sounds"] },
    { word: "noisy", categories: ["sounds"] },
    { word: "purring", categories: ["sounds"] },
    { word: "quiet", categories: ["sounds"] },
    { word: "rapping", categories: ["sounds"] },
    { word: "raspy", categories: ["sounds"] },
    { word: "rhythmic", categories: ["sounds"] },
    { word: "screeching", categories: ["sounds"] },
    { word: "shrilling", categories: ["sounds"] },
    { word: "squeaking", categories: ["sounds"] },
    { word: "thundering", categories: ["sounds"] },
    { word: "tinkling", categories: ["sounds"] },
    { word: "wailing", categories: ["sounds"] },
    { word: "whining", categories: ["sounds"] },
    { word: "whispering", categories: ["sounds"] },
    { word: "ancient", categories: ["time"] },
    { word: "brief", categories: ["time"] },
    { word: "early", categories: ["time"] },
    { word: "fast", categories: ["time"] },
    { word: "future", categories: ["time"] },
    { word: "late", categories: ["time"] },
    { word: "long", categories: ["time"] },
    { word: "modern", categories: ["time"] },
    { word: "old", categories: ["time"] },
    { word: "prehistoric", categories: ["time"] },
    { word: "quick", categories: ["time"] },
    { word: "rapid", categories: ["time"] },
    { word: "short", categories: ["time"] },
    { word: "slow", categories: ["time"] },
    { word: "swift", categories: ["time"] },
    { word: "young", categories: ["time"] },
    { word: "acidic", categories: ["taste"] },
    { word: "bitter", categories: ["taste"] },
    { word: "cool", categories: ["taste"] },
    { word: "creamy", categories: ["taste"] },
    { word: "delicious", categories: ["taste"] },
    { word: "disgusting", categories: ["taste"] },
    { word: "fresh", categories: ["taste"] },
    { word: "greasy", categories: ["taste"] },
    { word: "juicy", categories: ["taste"] },
    { word: "hot", categories: ["taste"] },
    { word: "moldy", categories: ["taste"] },
    { word: "nutritious", categories: ["taste"] },
    { word: "nutty", categories: ["taste"] },
    { word: "putrid", categories: ["taste"] },
    { word: "rancid", categories: ["taste"] },
    { word: "ripe", categories: ["taste"] },
    { word: "rotten", categories: ["taste"] },
    { word: "salty", categories: ["taste"] },
    { word: "savory", categories: ["taste"] },
    { word: "sour", categories: ["taste"] },
    { word: "spicy", categories: ["taste"] },
    { word: "spoiled", categories: ["taste"] },
    { word: "stale", categories: ["taste"] },
    { word: "sweet", categories: ["taste"] },
    { word: "tangy", categories: ["taste"] },
    { word: "tart", categories: ["taste"] },
    { word: "tasteless", categories: ["taste"] },
    { word: "tasty", categories: ["taste"] },
    { word: "yummy", categories: ["taste"] },
    { word: "breezy", categories: ["touch"] },
    { word: "bumpy", categories: ["touch"] },
    { word: "chilly", categories: ["touch"] },
    { word: "cold", categories: ["touch"] },
    { word: "cool", categories: ["touch"] },
    { word: "cuddly", categories: ["touch"] },
    { word: "damaged", categories: ["touch"] },
    { word: "damp", categories: ["touch"] },
    { word: "dirty", categories: ["touch"] },
    { word: "dry", categories: ["touch"] },
    { word: "flaky", categories: ["touch"] },
    { word: "fluffy", categories: ["touch"] },
    { word: "freezing", categories: ["touch"] },
    { word: "greasy", categories: ["touch"] },
    { word: "hot", categories: ["touch"] },
    { word: "icy", categories: ["touch"] },
    { word: "loose", categories: ["touch"] },
    { word: "melted", categories: ["touch"] },
    { word: "prickly", categories: ["touch"] },
    { word: "rough", categories: ["touch"] },
    { word: "shaggy", categories: ["touch"] },
    { word: "sharp", categories: ["touch"] },
    { word: "slimy", categories: ["touch"] },
    { word: "sticky", categories: ["touch"] },
    { word: "strong", categories: ["touch"] },
    { word: "tight", categories: ["touch"] },
    { word: "uneven", categories: ["touch"] },
    { word: "warm", categories: ["touch"] },
    { word: "weak", categories: ["touch"] },
    { word: "wet", categories: ["touch"] },
    { word: "wooden", categories: ["touch"] },
    { word: "abundant", categories: ["quantity"] },
    { word: "billions", categories: ["quantity"] },
    { word: "enough", categories: ["quantity"] },
    { word: "few", categories: ["quantity"] },
    { word: "full", categories: ["quantity"] },
    { word: "hundreds", categories: ["quantity"] },
    { word: "incalculable", categories: ["quantity"] },
    { word: "limited", categories: ["quantity"] },
    { word: "little", categories: ["quantity"] },
    { word: "many", categories: ["quantity"] },
    { word: "most", categories: ["quantity"] },
    { word: "millions", categories: ["quantity"] },
    { word: "numerous", categories: ["quantity"] },
    { word: "scarce", categories: ["quantity"] },
    { word: "some", categories: ["quantity"] },
    { word: "sparse", categories: ["quantity"] },
    { word: "substantial", categories: ["quantity"] },
    { word: "thousands", categories: ["quantity"] },
  ] as const,
};

export type WordList = typeof wordList;

export type Categories = {
  [K in keyof WordList]: WordList[K][number]["categories"][number];
};

export function getWordsByCategory<P extends PartsOfSpeech>(
  partOfSpeech: P,
  categories: Categories[P][] = []
) {
  const selectedCategoried = new Set(categories);
  const selectedWords: WordList[P][number]["word"][] = [];

  for (let word of wordList[partOfSpeech]) {
    if (
      categories.length === 0 ||
      word.categories.some((cat: any) => selectedCategoried.has(cat))
    ) {
      selectedWords.push(word.word);
    }
  }

  return selectedWords;
}
