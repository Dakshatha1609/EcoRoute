from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# -----------------------------
# CORS (MANDATORY)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# DATA (14 TOURIST PLACES)
# -----------------------------
TOURIST_PLACES = {
    "alibag beach": {"lat": 18.6391, "lon": 72.8721},
    "awas beach": {"lat": 18.6882, "lon": 72.8629},
    "kihim beach": {"lat": 18.7246, "lon": 72.8638},
    "mandwa jetty": {"lat": 18.8004, "lon": 72.8786},
    "underi fort": {"lat": 18.7036, "lon": 72.8427},
    "saswane beach": {"lat": 18.4867, "lon": 72.8603},
    "varsli beach": {"lat": 18.6663, "lon": 72.8630},
    "nagaon beach": {"lat": 18.6048, "lon": 72.8976},
    "revadanda beach": {"lat": 18.5588, "lon": 72.9197},
    "revadanda fort": {"lat": 18.5599, "lon": 72.9223},
    "khanderi fort": {"lat": 18.7069, "lon": 72.8375},
    "kulaba fort": {"lat": 18.6409, "lon": 72.8737},
    "akshi beach": {"lat": 18.6015, "lon": 72.8961},
    "versoli beach": {"lat": 18.6665, "lon": 72.8631},
}

# Top-5 predicted future EV locations (from ML)
TOP5_PREDICTED = [
    "kihim beach",
    "awas beach",
    "mandwa jetty",
    "underi fort",
    "saswane beach",
]

# Existing EV stations near places
EXISTING_EV_STATIONS = {
    "alibag beach": [
        {"name": "EV Station A", "lat": 18.6410, "lon": 72.8715}
    ],
    "awas beach": [
        {"name": "EV Station B", "lat": 18.6900, "lon": 72.8605}
    ],
    "kihim beach": [],
    "mandwa jetty": [
        {"name": "EV Station C", "lat": 18.8020, "lon": 72.8760}
    ],
    "underi fort": [],
    "saswane beach": [],
}

# -----------------------------
# SCHEMAS
# -----------------------------
class PlaceRequest(BaseModel):
    place: str

# -----------------------------
# ROUTES
# -----------------------------
@app.get("/places")
def get_places():
    return TOURIST_PLACES


@app.post("/check-place")
def check_place(req: PlaceRequest):
    place = req.place.lower()

    if place in TOP5_PREDICTED:
        return {
            "predicted": True,
            "message": "This location is predicted as a high-priority future EV station site."
        }
    else:
        return {
            "predicted": False,
            "message": "This location already has EV coverage or is not prioritized."
        }


@app.post("/nearby-ev")
def nearby_ev(req: PlaceRequest):
    place = req.place.lower()

    return {
        "selected_place": TOURIST_PLACES.get(place),
        "stations": EXISTING_EV_STATIONS.get(place, [])
    }
