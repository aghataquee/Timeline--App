var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchEvents } from './fetcher.js';
import { showModal, hideModal } from './modal.js';
import { toggleTheme } from './theme.js';
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const events = yield fetchEvents();
    console.log('Events fetched:', events);
    (_a = document.getElementById('timeline-nav')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
        const target = e.target;
        if (target instanceof HTMLElement && target.classList.contains('timeline-btn')) {
            const year = target.dataset.year;
            const event = events.find(ev => ev.year === year);
            if (event)
                showModal(event);
        }
    });
    (_b = document.getElementById('theme-toggle')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', toggleTheme);
    (_c = document.getElementById('close-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', hideModal);
}));
