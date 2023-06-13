import {writable} from 'svelte/store';

interface Unit {
    Name: string;
    Picture: string;
    RaceId: string;
    Health: string;
    HealthPerModel: string;
    Barrier: string;
    Leadership: string;
    CostSP: string;
    UpkeepSP: string;
    CostMP: string;
    UpkeepMP: string;
    ModelCount: string;
    Armour: string;
    MeleeDefence: string;
    Parry: string;
    WardSave: string;
    PhysicalResist: string;
    MissileResist: string;
    MagicResist: string;
    FireResist: string;
    MeleeAttack: string;
    MeleeIsFire: boolean;
    MeleeIsMagic: boolean;
    WeaponStrength: string;
    BaseStrength: string;
    APStrength: string;
    VSLarge: string;
    VSInfantry: string;
    AttackSpeed: string;
    HighThreat: boolean;
    SplashTargetSize: string;
    SplashMaxAttack: string;
    Speed: string;
    ChargeBonus: string;
    Ammunation: string;
    Range: string;
    MissileStrength: string;
    MissileBaseStrength: string;
    MissileAPStrength: string;
    MissileVSLarge: string;
    MissileVSInfantry: string;
    ExplosionBaseStrength: string;
    ExplosionAPStrength: string;
    DetonationRadius: string;
    ShotsPerVolley: string;
    ProjectileCount: string;
    ReloadTime: string;
    Accuracy: string;
    CalibrationDistance: string;
    CalibrationArea: string;
    Mass: string;
    FatigueModifier: string;
}

const units= writable<Unit[]>([])

const getRaces = async () => {
    try {
        const response = await fetch('[APICALLHERE!!!!!!]');
        const result = await response.json();

        if (!result)
        {
            result.Units.forEach((newUnit: {
                Name: string;
                Picture: string;
                RaceId: string;
                Health: string;
                HealthPerModel: string;
                Barrier: string;
                Leadership: string;
                CostSP: string;
                UpkeepSP: string;
                CostMP: string;
                UpkeepMP: string;
                ModelCount: string;
                Armour: string;
                MeleeDefence: string;
                Parry: string;
                WardSave: string;
                PhysicalResist: string;
                MissileResist: string;
                MagicResist: string;
                FireResist: string;
                MeleeAttack: string;
                MeleeIsFire: boolean;
                MeleeIsMagic: boolean;
                WeaponStrength: string;
                BaseStrength: string;
                APStrength: string;
                VSLarge: string;
                VSInfantry: string;
                AttackSpeed: string;
                HighThreat: boolean;
                SplashTargetSize: string;
                SplashMaxAttack: string;
                Speed: string;
                ChargeBonus: string;
                Ammunation: string;
                Range: string;
                MissileStrength: string;
                MissileBaseStrength: string;
                MissileAPStrength: string;
                MissileVSLarge: string;
                MissileVSInfantry: string;
                ExplosionBaseStrength: string;
                ExplosionAPStrength: string;
                DetonationRadius: string;
                ShotsPerVolley: string;
                ProjectileCount: string;
                ReloadTime: string;
                Accuracy: string;
                CalibrationDistance: string;
                CalibrationArea: string;
                Mass: string;
                FatigueModifier: string; }) => {

                units.update( units => {
                    units.push(newUnit)
                    return units
                })
            })
        }

    }
    catch {
        return units
    }
}

