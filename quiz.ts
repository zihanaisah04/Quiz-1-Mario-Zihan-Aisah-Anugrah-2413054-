// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: string = 'mario';

// 4. Diserang: HP - 1 dan kembali ke form 'mario'. Jika sedang kebal, serangan tidak berpengaruh.
     takeDamage(): void {
        if (this.invincible === true) {
            console.log ('Mario dalam mode kebal, serangan tidak berpengaruh!');
        } else {
            this.hp -= 1;
            this.currentForm = 'mario';
            console.log ('mario mengenai serangan! nyawa mario berkurang 1 mario kembali ke bentuk awal!');
            }
        }

//  5. Bergerak ke kanan: positionX + speed.
    moveRight(): void {
        this.positionX += this.speed;
        }

//  6. Bergerak ke kiri: positionX - speed.
    moveLeft(): void {
        this.positionX -= this.speed;
        }

        getItem(item: Item): void {
            item.applyEffect(this);
     }
}
    
   // 1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
   abstract class Item {
    abstract applyEffect(mario: Mario): void;
    }

    class SuperMushroom extends Item {
        applyEffect(mario : Mario): void {
            mario.hp += 1;
            mario.currentForm = 'super mario';
            console.log('Mario mendapatkan Super Mushroom! nyawa Mario bertambah 1 dan menjadi Super Mario!');
        }
    } 

   // 2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1, dan dapat menembakkan bola api.
    class FireFlower extends Item {
        applyEffect (mario : Mario): void {
            mario.hp += 1;
            mario.currentForm = 'fire mario';
            console.log('Mario mendapatkan Fire Flower! nyawa Mario bertambah 1 Mario menjadi fire Mario dan bisa menembakkan bola api!');
        }
    }

   // 3. SuperStar (Bintang): Mario kebal terhadap serangan.
    class SuperStar extends Item {
        applyEffect (mario : Mario): void {
            mario.invincible = true;
            console.log ('Mario mendapatkan Super Star! Mario kebal terhadap serangan!');
        }
    }
    
    