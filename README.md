# KAIROS BEVERAGES — PRD implementation

This is a React 19 + Vite frontend and FastAPI + MongoDB enquiry backend based directly on the supplied PRD.

## Frontend
cd frontend
npm install
npm run dev

## Backend
cd backend
python -m venv .venv
# activate the environment
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

For local development, proxy `/api` from Vite to `http://localhost:8000` or serve the frontend/backend behind the same origin in deployment.

The hero contour field is procedural SVG. Each contour expands from the bottle/source centre, rotates, contracts and reverses direction continuously. The 360 section is a drag-based simulated rotation with a degree readout.
