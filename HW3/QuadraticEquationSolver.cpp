#include <iostream>
#include <cmath>

int solveQuadratic(const double& a, const double& b, const double& c, double& root1, double& root2) {
  double discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return 0;
  } else if (discriminant == 0) {
    root1 = -b / (2 * a);
    root2 = root1;
    return 1;
  } else {
    root1 = (-b + std::sqrt(discriminant)) / (2 * a);
    root2 = (-b - std::sqrt(discriminant)) / (2 * a);
    return 2;
  }
}

int main() {
  std::cout << "Enter coefficient A: ";
  double a;
  std::cin >> a;
  std::cout << "Enter coefficient B: ";
  double b;
  std::cin >> b;
  std::cout << "Enter coefficient C: ";
  double c;
  std::cin >> c;

  double root1{0}, root2{0};
  int numSolutions = solveQuadratic(a, b, c, root1, root2);

  if (numSolutions == 0) {
    std::cout << "No real solutions.\n";
  } else if (numSolutions == 1) {
    std::cout << "One real solution: " << root1 << "\n";
  } else {
    std::cout << "Two real solutions: " << root1 << " and " << root2 << "\n";
  }

  return 0;
}
