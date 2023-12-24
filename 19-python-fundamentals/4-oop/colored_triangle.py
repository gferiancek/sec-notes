from triangle import Triangle

class ColoredTriangle(Triangle):
    """Triangle that has color"""

    def __init__(self, a, b, color):
        super().__init__(a, b)
        self.color = color

    def describe(self):
        return f"{super().describe()}. I am {self.color}"