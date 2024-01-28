import networkx as nx
import pandas as pd

# Load the dataset from CSV
data = pd.read_csv('indian-cities-dataset.csv')

# Create a graph
G = nx.Graph()

# Add edges to the graph with distance, mode, and cost attributes
for row in data.itertuples(index=False):
    G.add_edge(row.Origin, row.Destination, distance=row.Distance, mode=row.Mode, cost=row.Cost)

# Define a mapping of modes to travel methods
mode_mapping = {
    'Car': 'road',
    'Train': 'train',
    'Flight': 'flight'
}

# Function to find the most cost-effective route
def find_cheapest_route(source, destination):
    try:
        # Find all possible routes
        routes = list(nx.all_simple_paths(G, source=source, target=destination))

        # Calculate costs for each route
        route_costs = [(route, sum(G[u][v]['cost'] for u, v in zip(route, route[1:]))) for route in routes]

        # Sort routes by cost
        sorted_routes = sorted(route_costs, key=lambda x: x[1])

        # Extract the cheapest route and its cost
        cheapest_route, cheapest_cost = sorted_routes[0]

        # Extract modes of transportation for the cheapest route
        modes = [G[u][v]['mode'] for u, v in zip(cheapest_route, cheapest_route[1:])]

        # Map modes to travel methods with default values
        travel_methods = [mode_mapping.get(mode, 'road') for mode in modes]

        return {
            'source': source,
            'destination': destination,
            'cheapest_route': cheapest_route,
            'cheapest_cost': cheapest_cost,
            'travel_methods': travel_methods
        }

    except nx.NetworkXNoPath:
        return {'message': 'No path found between {} and {}'.format(source, destination)}

# Example usage
source_location = input("Enter the source location: ")
destination_location = input("Enter the destination location: ")

result = find_cheapest_route(source_location, destination_location)
print(result)

if 'travel_methods' in result:
    print("Travel methods for the cheapest route:")
    print(result['travel_methods'])
