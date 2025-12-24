import json

# Input and output files
input_file = "ikea.json"
output_file = "ikea.geojson"

# Load list of locations
with open(input_file, "r", encoding="utf-8") as f:
    locations = json.load(f)

# Create GeoJSON FeatureCollection
features = []

for loc in locations:
    feature = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [
                float(loc["longitude"]),
                float(loc["latitude"])
            ]
        },
        "properties": {
            key: value
            for key, value in loc.items()
            if key not in ("latitude", "longitude")
        }
    }
    features.append(feature)

geojson = {
    "type": "FeatureCollection",
    "features": features
}

# Save GeoJSON file
with open(output_file, "w", encoding="utf-8") as f:
    json.dump(geojson, f, indent=2)

print("GeoJSON saved to", output_file)
