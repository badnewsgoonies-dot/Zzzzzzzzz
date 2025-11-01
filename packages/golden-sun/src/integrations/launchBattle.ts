export type BattleOutcome = 'player' | 'enemy' | 'draw';
export interface BattleConfig {
  seed: string;
  playerParty: unknown[];
  enemyParty: unknown[];
  onLog?: (e: unknown) => void;
}
export async function launchBattle(cfg: BattleConfig): Promise<BattleOutcome> {
  // TODO: Replace with real import from @nextera/battle once you expose public API
  // e.g., import { runBattle } from '@nextera/battle'
  // return await runBattle(cfg)
  console.warn('launchBattle stub called with', cfg);
  return 'draw';
}
