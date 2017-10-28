class DiscounterFactory {
    static GetDiscounter(level: string): IDiscounter {
        switch (level) {
            case 'VIP':
                return new VipDiscounter();
            case 'Normal':
            default:
                return new NormalDiscounter();
        }
    }
}