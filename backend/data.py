# All 14 tourist places (single source of truth)
TOURIST_PLACES = {
    "alibag beach": {"lat": 18.6391, "lon": 72.8721},
    "awas beach": {"lat": 18.6730, "lon": 72.8610},
    "kihim beach": {"lat": 18.7246, "lon": 72.8638},
    "mandwa jetty": {"lat": 18.8070, "lon": 72.8830},
    "underi fort": {"lat": 18.7000, "lon": 72.8600},
    "saswane beach": {"lat": 18.6510, "lon": 72.8280},
    "varsuli beach": {"lat": 18.6663, "lon": 72.8630},
    "nagaon beach": {"lat": 18.6048, "lon": 72.8976},
    "revadanda beach": {"lat": 18.5588, "lon": 72.9198},
    "kankeshwar temple": {"lat": 18.4470, "lon": 72.9640},
    "kulaba fort": {"lat": 18.6370, "lon": 72.8660},
    "akhshi beach": {"lat": 18.6110, "lon": 72.9000},
    "thalkeshwar beach": {"lat": 18.5900, "lon": 72.9200},
    "khanderi fort": {"lat": 18.7210, "lon": 72.8500},
}

# Top-5 predicted future EV locations (ML output)
TOP5_PREDICTED = [
    "kihim beach",
    "awas beach",
    "mandwa jetty",
    "underi fort",
    "saswane beach"
]

# Existing EV stations per place (EMPTY list is VALID)
EXISTING_EV_STATIONS = {
    "alibag beach": [
        {"name": "EV Station A", "lat": 18.6405, "lon": 72.8729}
    ],
    "awas beach": [
        {"name": "EV Station C", "lat": 18.6812, "lon": 72.8604}
    ],
    "kihim beach": [],
    "mandwa jetty": [
        {"name": "EV Station D", "lat": 18.8030, "lon": 72.8840}
    ],
    "underi fort": [],
    "saswane beach": [],
    "varsuli beach": [],
    "nagaon beach": [],
    "revadanda beach": [],
    "kankeshwar temple": [],
    "kulaba fort": [],
    "akhshi beach": [],
    "thalkeshwar beach": [],
    "khanderi fort": [],
}
